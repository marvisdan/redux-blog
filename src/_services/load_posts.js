import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=marvis1237';

function loadAPIPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return request;
}
export default loadAPIPosts;
