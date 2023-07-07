import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
  }
  export const reducer= (state=initialState, {type, payload})=>{
    switch(type){
      case GET_PRODUCT_REQUEST : return {...state, isLoading:true}
      case GET_PRODUCT_SUCCESS: return{...state, isLoading:false, products:payload}
      case GET_PRODUCT_FAILURE: return {...state, isLoading:false, isError:true}


      case POST_PRODUCT_REQUEST:return {...state,isLoading:true}
      case POST_PRODUCT_SUCCESS:return {isLoading:false,products:[...state,payload]}
      case POST_PRODUCT_FAILURE:return {...state,isLoading:false,isError:true}
      
      
      default: return state
    }

  }