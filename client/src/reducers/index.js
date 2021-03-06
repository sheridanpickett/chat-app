const initialState = {
  user: {
    name: '',
    id: ''
  },
  rooms: [],
  activeRoom: null,
  roomInfo: {}
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
    return null
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
            users: [],
            loading: true
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
      return ({
        ...state,
        roomInfo: {
          ...state.roomInfo,
          [action.message.room]: {
            ...state.roomInfo[action.message.room],
            messages: [...state.roomInfo[action.message.room].messages, action.message]
          }
        }
      })
    case 'ADD_MESSAGES':
      return ({
        ...state,
        roomInfo: {
          ...state.roomInfo,
          [action.room]: {
            ...state.roomInfo[action.room],
            messages: [...action.messages, ...state.roomInfo[action.room].messages]
          }
        }
      })
    case 'ADD_USER_TO_ROOM':
    const userIds = state.roomInfo[action.room].users.map(user => user.id);
    if(!userIds.includes(action.user.id)){
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
    } else {
      return ({...state})
    }
    case 'REMOVE_USER_FROM_ROOM':
    return ({
      ...state,
      roomInfo: {
        ...state.roomInfo,
        [action.room]: {
          ...state.roomInfo[action.room],
          users: removeItemById(state.roomInfo[action.room].users, action.id)
        }
      }
    })
    case 'SET_ROOM_LOADING':
    return ({
      ...state,
      roomInfo: {
        ...state.roomInfo,
        [action.room]: {
          ...state.roomInfo[action.room],
          loading: action.isLoading
        }
      }
    })
    case 'SET_ROOM_NEW_MESSAGE':
    if(action.room!==''){
      return ({
        ...state,
        roomInfo: {
          ...state.roomInfo,
          [action.room]: {
            ...state.roomInfo[action.room],
            newMessage: action.newMessage
          }
        }
      })
    } else {
      return state
    }
    default:
      return state
  }
}

export default reducer
