import React, { useEffect } from 'react';
import socket from './connectSocket';
import StyledApp from './styles/App';
import SideBar from './components/SideBar';
import EnterName from './containers/EnterName';
import ChatArea from './containers/ChatArea';

const App = ({title, user, rooms, activeRoom, addMessage, addUserToRoom, removeUserFromRoom, updateUser}) => {
	useEffect(()=>{
		title ? document.title = title : document.title = 'Chat App'
	}, [title])

	useEffect(()=>{
		const state = {
			user: {name: user.name},
			rooms,
			activeRoom
		}
		try {
			const serializedState = JSON.stringify(state);
			localStorage.setItem('state', serializedState)
		} catch(err) {
			console.log(err);
		}
	}, [user, rooms, activeRoom])

	useEffect(()=>{
		updateUser({...user, id: socket.id});
		if(socket.id&&user.name) {
			rooms.forEach(room => {
				console.log('joined room');
				socket.emit('join room', room, {...user, id: socket.id});
			})
		}
	}, [socket.id, user.name])

	useEffect(()=>{
		socket.on('chat message', (room, msg, newUser) => {
		  addMessage(room, msg, newUser)
		})
		socket.on('user joined', (room, newUser) => {
			addUserToRoom(room, newUser);
			socket.emit('user joined reply', room, user, newUser);
		})
		socket.on('user in room', (room, newUser) => {
			addUserToRoom(room, newUser);
		})
		socket.on('user left', (room, id) => {
			removeUserFromRoom(room, id)
		})
		return () => socket.removeAllListeners()
	}, [user])

  return (
		<StyledApp>
			<SideBar />
			{user.name===''?
				<EnterName />:
				<ChatArea />}
		</StyledApp>
	)
}

export default App;
