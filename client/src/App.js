import React, { useEffect } from 'react';
import socket from './connectSocket';
import StyledApp from './styles/App';
import SideBar from './components/SideBar';
import EnterName from './containers/EnterName';
import ChatArea from './containers/ChatArea';

const App = ({title, user, addMessage, addUserToRoom, removeUserFromRoom}) => {
	useEffect(()=>{
		title ? document.title = title : document.title = 'Chat App'
	}, [title])

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
		socket.on('user left', (room, user) => {
			removeUserFromRoom(room, user)
			console.log(user.name + ' left ' + room)
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
