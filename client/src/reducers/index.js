const initialState = {
  name: 'Sheridan',
  rooms: ['room1', 'room2', 'room3'],
  activeRoom: {
    name: 'room1',
    index: 0
  }
}

let removeItem = (array, action) => {
  let newArray = array.slice()
  newArray.splice(action.index, 1)
  return newArray
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_NAME':
      return Object.assign({}, state, {
        name: action.name
      })
    case 'UPDATE_ACTIVE_ROOM':
      return Object.assign({}, state, {
        activeRoom: action.activeRoom
      })
    case 'DELETE_ROOM':
      return ({
        ...state,
        rooms: removeItem(state.rooms, action)
      })
    default:
      return state
  }
}

export default reducer
