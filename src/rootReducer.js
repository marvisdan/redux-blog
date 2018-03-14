import { combineReducers } from 'redux';
import loadPostsReducer from './reducers';

const rootReducer = combineReducers({
  loadPost: loadPostsReducer,
});
export default rootReducer;
