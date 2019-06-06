import React, { useEffect } from 'react';
import socket from './connectSocket';
import StyledApp from './styles/App';
import SideBar from './components/SideBar';
import EnterName from './containers/EnterName';
import ChatArea from './containers/ChatArea';

const App = ({title, user, addMessage}) => {

	useEffect(()=>{
		title ? document.title = title : document.title = 'Chat App'
	},[title])

	useEffect(()=>{
		socket.on('chat message', (room, msg, user) => {
		  addMessage(room, msg, user)
		})
	}, [addMessage])

  return (
		<StyledApp>
			<SideBar />
				{user.name===''?<EnterName />:<ChatArea />}
		</StyledApp>
	)
}

export default App;
