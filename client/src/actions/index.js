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

export const addMessage = (room, msg, user) => ({
  type: 'ADD_MESSAGE',
  room,
  msg,
  user
})
