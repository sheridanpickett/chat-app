import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import styled from 'styled-components';
import LoadingDots from './components/LoadingDots';
import InputAndSubmit from './components/InputAndSubmit';
import UserTagList from './components/UserTagList';
import SideBar from './components/SideBar';
import Main from './components/Main';
import SplashPage from './components/SplashPage';

const socket = socketIOClient('http://127.0.0.1:4000');

const StyledWrapper = styled.div`
	display: flex;
	font-family: "Geneva";
	min-height: 100vh;
	min-width: 100vw;
`

class App extends Component {
	state = {
		messages: [],
		message: '',
		name: '',
		socketID: '',
		location: {},
		loading: true,
		userSubmitted: false,
		userList: [],
		newRoomName: '',
		rooms: []
	};

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(position => {
			console.log('location found')
			this.setState({
				location: {
					lon: position.coords.longitude,
					lat: position.coords.latitude
				},
				loading: false
			})
		});
		socket.on('connect', () => {
			this.setState({socketID: socket.id});
		})
		socket.on('chat message', (room, msg) => {
			this.setState(prevState => ({

			}))
		});
	}

	submitUser = async e => {
		e.preventDefault()
		if (this.state.name !== ''){
			this.setState({userSubmitted: true});
			try {
				let userList = await fetch('http://127.0.0.1:4000/createUser', {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: this.state.name,
						socketID: this.state.socketID,
						location: {
							type: "Point",
							coordinates: [this.state.location.lon, this.state.location.lat]
						}
					})
				});
				userList = await userList.json();
				this.setState({userList})
				console.log('done')
			} catch(err) {
				console.log(err)
			}
		}
	}

	joinRoom = e => {
		e.preventDefault();
		const room = this.state.newRoomName;
		if(room) {
			socket.emit('join room', room);
			this.setState(prevState => ({
						rooms: [...prevState.rooms, room],
						newRoomName: ''
				})
			)
		}
	}

	sendMessage = e => {
		e.preventDefault();
		if (this.state.message) {
			socket.emit('chat message', this.state.room, this.state.message);
			this.setState({message: ""});
		}
	}

	setName = e => {
		this.setState({ name: e.target.value })
	}

	setNewRoomName = e => {
		this.setState({ newRoomName: e.target.value })
	}

	setMessage = e => {
		this.setState({message: e.target.value})
	}

  render() {
		const { loading, userSubmitted, name, message, messages, userList, room, rooms, newRoomName } = this.state;
    return (
			<StyledWrapper>
				<SideBar>
					{loading && <LoadingDots text="Finding location" />}
					{(!loading && !userSubmitted) &&
						<InputAndSubmit
							placeholder="Enter your name"
							value={name}
							buttonText="Send"
							onChange={this.setName}
							onClick={this.submitUser}
						/>}
					{userSubmitted && <UserTagList userList={userList} />}
				</SideBar>
				<Main />
 			</StyledWrapper>
		)
  }
}

export default App;
