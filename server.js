const express = require('express')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const cors = require('cors')
const User = require('./models/User');
const connectDB = require('./config/connect');

connectDB();
app.use(cors());
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
	socket.on('chat message', (room, msg, user) => {
		io.to(room).emit('chat message', room, msg, user);
	});
	socket.on('join room', (room, user) => {
		socket.join(room);
		socket.to(room).emit('user joined', room, user)
	})
	socket.on('leave room', (room, user) => {
		socket.leave(room);
		console.log(user.name + ' left ' + room)
		socket.to(room).emit('user left', room, user);
	})
	socket.on('user joined reply', (room, user, newUser) => {
		socket.to(`${newUser.id}`).emit('user in room', room, user);
	})
	socket.on('disconnect', async () => {
		console.log('left' + socket.rooms);
		try {
			let result = await User.deleteOne({socketID: socket.id})
		} catch(err) {
			console.log(err)
		}
	});
})

server.listen(4000)
