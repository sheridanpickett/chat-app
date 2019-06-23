export const updateUser = user => ({
  type: 'UPDATE_USER',
  user
})

export const updateActiveRoom = index => ({
  type: 'UPDATE_ACTIVE_ROOM',
  index
})

export const addRoom = () => ({
  type: 'ADD_ROOM',
})

export const updateRoom = room => ({
  type: 'UPDATE_ROOM',
  room
})

export const deleteRoom = index => ({
  type: 'DELETE_ROOM',
  index
})

export const deleteRoomInfo = room => ({
  type: 'DELETE_ROOM_INFO',
  room
})

export const addMessage = message => ({
  type: 'ADD_MESSAGE',
  message
})

export const addMessages = (room, messages) => ({
  type: 'ADD_MESSAGES',
  room,
  messages
})

export const addUserToRoom = (room, user) => ({
  type: 'ADD_USER_TO_ROOM',
  room,
  user
})

export const removeUserFromRoom = (room, user) => ({
  type: 'REMOVE_USER_FROM_ROOM',
  room,
  user
})

export const setRoomLoading = (room, isLoading) => ({
  type: 'SET_ROOM_LOADING',
  room,
  isLoading
})

export const setRoomNewMessage = (room, newMessage) => ({
  type: 'SET_ROOM_NEW_MESSAGE',
  room,
  newMessage
})
