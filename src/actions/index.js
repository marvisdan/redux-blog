
import loadAPIPosts from '../_services/load_posts';

export const LOAD_POSTS = 'LOAD_POSTS';

const request = loadAPIPosts();
console.log(request);

export function loadPosts() {
  return {
    type: LOAD_POSTS,
    payload: request,
  };
}
