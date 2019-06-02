import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import styled from 'styled-components';
import LoadingDots from './components/LoadingDots';
import InputAndSubmit from './components/InputAndSubmit';
import UserTagList from './components/UserTagList';
import SideBar from './components/SideBar';
import Content from './components/Content';
import SplashPage from './components/SplashPage';

const socket = socketIOClient('http://127.0.0.1:4000');

const StyledWrapper = styled.div`
	display: flex;
	font-family: "Geneva";
	color: white
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
		socket.on('chat message', msg => {
			this.setState(previousState => ({
			    messages: [...previousState.messages, msg]
			}));
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

	setName = e => {
		this.setState({ name: e.target.value })
	}

	setNewRoomName = e => {
		this.setState({ newRoomName: e.target.value })
	}

	joinRoom = e => {
		e.preventDefault();
		socket.emit('join room', this.state.newRoomName)
		this.setState(previousState => ({
			newRoomName: '',
			rooms: [...previousState.rooms, previousState.newRoomName]
		}))
	}

  render() {
		const { loading, userSubmitted, userList, newRoomName, rooms } = this.state;
    return (
			<StyledWrapper>
				<SideBar>
					{loading && <LoadingDots text="Finding location" />}
					{(!loading && !userSubmitted) &&
						<InputAndSubmit
							placeholder="Enter your name"
							buttonText="Send"
							onChange={this.setName}
							onClick={this.submitUser}
						/>}
					{userSubmitted && <UserTagList userList={userList} />}
				</SideBar>
				<Content>
					{rooms.length < 1 ?
						<SplashPage onChange={this.setNewRoomName} onClick={this.joinRoom} /> :
						<>
							<div>p</div>
							<InputAndSubmit
								placeholder="Write a message..."
								buttonText="Send"
							/>
						</>
					}
				</Content>
			</StyledWrapper>
		)
  }
}

export default App;
