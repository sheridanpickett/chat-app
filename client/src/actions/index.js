export const updateName = name => ({
  type: 'UPDATE_NAME',
  name
})

export const updateActiveRoom = (room, index) => ({
  type: 'UPDATE_ACTIVE_ROOM',
  activeRoom: {
    room,
    index
  }
})

export const deleteRoom = (index) => ({
  type: 'DELETE_ROOM',
  index: index
})
