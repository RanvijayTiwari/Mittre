
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    isAuth: true,
    token: "",
  }

  export const reducer= (state=initialState, {type, payload})=>{
    switch(type){
      case LOGIN_REQUEST: return{...state, isLoading:true}
      case LOGIN_SUCCESS: return{...state, isLoading:false, token:payload, isAuth:true}
      case LOGIN_FAILURE: return{...state, isLoading:false, isError:true}
      default: return state
    }

  }