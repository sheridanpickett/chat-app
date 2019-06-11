export default () => {
  try {
    let serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    serializedState = JSON.parse(serializedState);
    if(serializedState.rooms.length<1) {
      serializedState.roomInfo = {};
    } else {
      let roomInfo = {};
      serializedState.roomInfo = serializedState.rooms.map(room => {
        roomInfo[room] = {users: [], messages: []};
        return undefined;
      })
      serializedState.roomInfo = roomInfo;
    }
    return serializedState;
  } catch (err) {
    return undefined;
  }
};
