import React, { useEffect, useState } from 'react';
import socket from './connectSocket';
import StyledApp from './styles/App';
import SideBar from './containers/SideBar';
import EnterName from './containers/EnterName';
import ChatArea from './containers/ChatArea';

const App = ({
	title, user, rooms, activeRoom, roomInfo,
	addMessage, addMessages, addUserToRoom, removeUserFromRoom, setRoomLoading, setRoomNewMessage}) => {

	const [notification, setNotification] = useState('');

	useEffect(()=>{
		const handleVisibilityChange = () => {
			if(!document.hidden) {
				setNotification('')
			}
		}
		document.addEventListener("visibilitychange", handleVisibilityChange);
		title ? document.title = title + notification : document.title = 'Chat App '+ notification;
		return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
	}, [title, notification])

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
			rooms.forEach(room => {
				if(room!==''&&user.name!==''){
					setRoomLoading(room, true)
					socket.emit('join room', room, user);
					if(!roomInfo[room].messages.length) {
						socket.emit('get messages', room);
					}
				}
			})
	}, [user])

	useEffect(()=>{
		socket.on('user joined', (room, newUser) => {
			addUserToRoom(room, newUser);
			socket.emit('user joined reply', room, user, newUser);
		})
		socket.on('get users in room', (room, newUser) => {
			addUserToRoom(room, newUser);
		})
		socket.on('get messages', (room, messages) => {
			if(messages.length) {
				messages.reverse();
				addMessages(room, messages);
			}
			setRoomLoading(room, false)
		})
		socket.on('user left', (room, id) => {
			removeUserFromRoom(room, id)
		})
		return () => socket.removeAllListeners()
	}, [user])

	useEffect(()=>{
		const handleMessage = message => {
		  addMessage(message);
			if(message.room !== rooms[activeRoom]) {
				setRoomNewMessage(message.room, true);
			}
			if(document.hidden) {
				setNotification(' (new)');
			}
		}
		socket.on('chat message', handleMessage);
		return () => socket.removeListener('chat message', handleMessage);
	}, [rooms, activeRoom])

  return (
		<StyledApp>
			{user.name===''?
				<EnterName />:
				<>
					<SideBar />
					<ChatArea />
				</>
			}
		</StyledApp>
	)
}

export default App;
