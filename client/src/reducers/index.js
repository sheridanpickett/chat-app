const initialState = {
  user: {
    name: '',
    id: ''
  },
  rooms: [],
  activeRoom: null,
  messages: {}
}

const removeItem = (array, index) => {
  let newArray = array.slice();
  newArray.splice(index, 1);
  return newArray;
}

const updateItem = (array, item, index) => {
  let newArray = array.slice();
  newArray[index] = item;
  return newArray;
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_USER':
      return Object.assign({}, state, {
        user: action.user
      })
    case 'UPDATE_ACTIVE_ROOM':
      return Object.assign({}, state, {
        activeRoom: action.index
      })
    case 'ADD_ROOM':
      return ({
        ...state,
        rooms: [...state.rooms, ''],
      })
    case 'UPDATE_ROOM':
    const room = action.room;
      if(state.messages[room]) {
        return ({
          ...state,
          rooms: updateItem(state.rooms, room, state.activeRoom),
        })
      } else {
        return ({
          ...state,
          rooms: updateItem(state.rooms, action.room, state.activeRoom),
          messages: {...state.messages, [action.room]: []}
        })
      }
    case 'DELETE_ROOM':
      return ({
        ...state,
        rooms: removeItem(state.rooms, action.index)
      })
    case 'ADD_MESSAGE':
    const { msg, user } = action
      return({
        ...state,
        messages: {
          ...state.messages,
          [action.room]: [...state.messages[action.room], {msg, user}]
        }
      })
    default:
      return state
  }
}

export default reducer
