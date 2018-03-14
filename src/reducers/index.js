import _ from 'lodash';
import { LOAD_POSTS } from '../actions';

const initialState = {
  posts: {},
};
function loadPostsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      console.log('action', action.payload.data);
      let posts = _.mapKeys(action.payload.data, 'id');
      return {...state,  posts };
    default:
      return state;
  }
}

export default loadPostsReducer;
