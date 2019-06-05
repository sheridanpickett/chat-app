import React, { useEffect } from 'react';
import socket from './connectSocket';
import StyledApp from './styles/App';
import SideBar from './components/SideBar';
import ChatArea from './containers/ChatArea';

const App = ({title, addMessage}) => {

	useEffect(()=>{
		title ? document.title = title : document.title = 'Chat App'
	})

	useEffect(()=>{
		socket.on('chat message', (room, msg) => {
		  addMessage(room, msg)
		})
	}, [])

  return (
		<StyledApp>
			<SideBar>
			</SideBar>
			<ChatArea />
		</StyledApp>
	)
}

export default App;
