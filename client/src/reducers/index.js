const initialState = {
  user: {
    name: '',
    id: ''
  },
  rooms: [],
  activeRoom: null,
  roomInfo: {

  }
}

const removeItem = (array, index) => {
  const newArray = array.slice();
  newArray.splice(index, 1);
  return newArray;
}

const removeItemById = (array, id) => {
  const newArray = array.slice();
  const idIndex = array.map((user, index) => {
    if(user.id===id) {return index}
  })
  newArray.splice(idIndex, 1);
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
      if(state.roomInfo[room]) {
        return ({
          ...state,
          rooms: updateItem(state.rooms, room, state.activeRoom),
        })
      } else {
        return ({
          ...state,
          rooms: updateItem(state.rooms, action.room, state.activeRoom),
          roomInfo: {...state.roomInfo, [action.room]: {
            messages: [],
            users: []
          }}
        })
      }
    case 'DELETE_ROOM':
      return ({
        ...state,
        rooms: removeItem(state.rooms, action.index)
      })
    case 'DELETE_ROOM_INFO':
      let {[action.room]: omit, ...rest} = state.roomInfo;
      return ({
        ...state,
        roomInfo: {
          ...rest
        }
      })
    case 'ADD_MESSAGE':
      const { msg, user } = action;
      return ({
        ...state,
        roomInfo: {
          ...state.roomInfo,
          [action.room]: {
            ...state.roomInfo[action.room],
            messages: [...state.roomInfo[action.room].messages, {msg, user}]
          }
        }
      })
      case 'ADD_USER_TO_ROOM':
      return ({
        ...state,
        roomInfo: {
          ...state.roomInfo,
          [action.room]: {
            ...state.roomInfo[action.room],
            users: [...state.roomInfo[action.room].users, action.user]
          }
        }
      })
      case 'REMOVE_USER_FROM_ROOM':
      return ({
        ...state,
        roomInfo: {
          ...state.roomInfo,
          [action.room]: {
            ...state.roomInfo[action.room],
            users: removeItemById(state.roomInfo[action.room].users, action.user.id)
          }
        }
      })
    default:
      return state
  }
}

export default reducer
