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

app.post('/test', async (req, res) => {
})

io.on('connection', socket => {
	socket.on('chat message', (room, msg, user) => {
		io.emit('chat message', room, msg, user);
		console.log(room, msg, user)
	});
	socket.on('join room', room => {
		socket.join(room)
	})
	socket.on('disconnect', async () => {
		try {
			let result = await User.deleteOne({socketID: socket.id})
		} catch(err) {
			console.log(err)
		}
	});
})

// const nsp = io.of('/my-namespace');
// nsp.on('connection', socket => {
// 	console.log('A user connected');
// 	socket.on('chat message', msg => {
// 		console.log(msg);
//     nsp.emit('chat message', msg);
//   });
// 	socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// })

server.listen(4000)
