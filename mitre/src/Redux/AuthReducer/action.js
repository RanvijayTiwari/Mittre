import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";
import axios from "axios";


export const loginPendingAction = ()=>{
  return{type: LOGIN_REQUEST}
}
export const loginSuccessAction = (payload)=>{
  return {type: LOGIN_SUCCESS, payload}
}
export const loginFailureAction=() =>{
  return{type: LOGIN_FAILURE}
}


export const login = ({email, password})=>(dispatch) => {
  // Complete login Functionality
  

  dispatch(loginPendingAction())
  axios.post('https://reqres.in/api/login',{email, password})
  .then((res)=>dispatch(loginSuccessAction(res.data.token)))
  .catch(()=>dispatch(loginFailureAction()))

  
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}