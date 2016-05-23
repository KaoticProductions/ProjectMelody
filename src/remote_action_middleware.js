export default socket => store => poke => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return poke(action);
}
