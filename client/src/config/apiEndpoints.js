// const BASE_API = "/api";
// const BASE_API = "/api";
// const BASE_API = "http://192.168.64.23:30080/api";
// const BASE_API = "http://gateway-service.default.svc.cluster.local/api";
// const BASE_API = "http://" + window.location.hostname + "/api";
const BASE_API = window.location.protocol + '//' + window.location.hostname + '/api';



export const API_URLS = {
  postQuestion: `${BASE_API}/postQuestion`,
  getAllQuestions: `${BASE_API}/getAllQuestions`,
  addLikeToQuestion: `${BASE_API}/addLikeToQuestion`,
  addDislikeToQuestion: `${BASE_API}/addDislikeToQuestion`,
  postComment: `${BASE_API}/postComment/`,
  getAllComments: `${BASE_API}/getAllComments`,
  addLikeToComment: `${BASE_API}/addLikeToComment/`,
  addDislikeToComment: `${BASE_API}/addDislikeToComment/`,
  // signup: `${BASE_API}/user/signup`,
  signup: `${BASE_API}/register`,
  // signin: `${BASE_API}/user/signin`,
  signin: `${BASE_API}/login`,
  searchQuestions:`${BASE_API}/searchQuestions`
};

export const token = 'token';

export const config = {
  headers: { 'Authorization': "Bearer " + localStorage.getItem(token) }
};
