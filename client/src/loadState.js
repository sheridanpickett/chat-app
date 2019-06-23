export default () => {
  try {
    let serializedState = localStorage.getItem('state');
    serializedState = JSON.parse(serializedState);
    if(serializedState.rooms.length<1) {
      serializedState.roomInfo = {};
    } else {
      let roomInfo = {};
      serializedState.roomInfo = serializedState.rooms.forEach(room => {
        if(room!==''){
          roomInfo[room] = {loading: true, users: [], messages: [], newMessage: false};
        }
      })
      serializedState.roomInfo = roomInfo;
    }
    return serializedState;
  } catch (err) {
    return undefined;
  }
};
