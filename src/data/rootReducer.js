import { combineReducers } from 'redux';

import socketReducer from './socket/socket.reducers';

export default combineReducers({
  socket: socketReducer,
});
