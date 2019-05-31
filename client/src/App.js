import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import styled from 'styled-components';
import LoadingDots from './components/LoadingDots';
import InputAndSubmitField from './components/InputAndSubmitField';
import UserTagList from './components/UserTagList';

const socket = socketIOClient('http://127.0.0.1:4000');



const StyledWrapper = styled.div`
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
		userList: []
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

	setName = e => {
		this.setState({ name: e.target.value })
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

	joinRoom = id => {
		socket.emit('join room', id)
	}

  render() {
		const { loading, userSubmitted, userList } = this.state;
    return (
			<StyledWrapper>
				{loading && <LoadingDots />}
				{(!loading && !userSubmitted) &&
					<InputAndSubmitField
						placeholder="Enter your name"
						onChange={this.setName}
						onClick={this.submitUser}
					/>}
				{userSubmitted && <UserTagList userList={userList} />}
				<InputAndSubmitField
					placeholder="Write a message..."
				/>
			</StyledWrapper>
		)
  }
}

export default App;
