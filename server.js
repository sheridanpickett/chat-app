const express = require('express')
const app = express();
const path = require('path')
const server = require('http').createServer(app);
const io = require('socket.io')(server, {pingTimeout: 20000});
const mongoose = require('mongoose');
const cors = require('cors')
const User = require('./models/User');
const Message = require('./models/Message')
const connectDB = require('./config/connect');

connectDB();
app.use(cors());
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.json());

app.post('/createUser', async (req, res) => {
	try {
		const user = new User({
			name: req.body.name,
			socketID: req.body.socketID,
			location: req.body.location
		})
		await user.save();
	  let userList = await User.find(
		{
	  	location: {
	    	$nearSphere: {
	      	$geometry: req.body.location,
		      $minDistance: 0,
		      $maxDistance: 5000
		    }
		 	}
	 	})
		res.json(userList);
	} catch(err) {
		console.log(err);
	}
})

io.on('connection', socket => {
	socket.on('chat message', async message => {
		io.to(message.room).emit('chat message', message);
		try {
			const newMessage = new Message({
				...message
			})
			await newMessage.save()
		} catch(err) {
			console.log(err);
		}
	});
	socket.on('join room', async (room, user) => {
		socket.join(room);
		socket.to(room).emit('user joined', room, {...user, id: socket.id});
	})
	socket.on('get messages', async (room, dateInt) => {
		if(dateInt) {
			try {
				let messages = []
				messages = await Message.find({room, 'dateTime.dateInt': {$lt: dateInt}}).sort({'dateTime.dateInt': -1}).limit(10)
				socket.emit('get messages', room, messages);
				socket.emit('loading done', room);
			} catch(err) {
				console.log(err);
			}
		} else {
			try {
				let messages = []
				messages = await Message.find({room}).sort({'dateTime.dateInt': -1}).limit(20)
				socket.emit('get messages', room, messages);
				socket.emit('loading done', room);
			} catch(err) {
				console.log(err);
			}
		}
	})
	socket.on('leave room', room => {
		socket.leave(room);
		socket.to(room).emit('user left', room, socket.id);
	})
	socket.on('user joined reply', (room, user, newUser) => {
		socket.to(`${newUser.id}`).emit('get users in room', room, {...user, id: socket.id});
	})
	socket.on('disconnecting', () => {
		Object.keys(socket.rooms).map(room => {
			socket.to(room).emit('user left', room, socket.id);
		})
	})
	socket.on('disconnect', async () => {
		try {
			let result = await User.deleteOne({socketID: socket.id})
		} catch(err) {
			console.log(err)
		}
	});
})

server.listen(4000)
