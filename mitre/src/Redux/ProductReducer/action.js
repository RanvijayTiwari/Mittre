import axios from "axios";
import { GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, POST_PRODUCT_REQUEST, POST_PRODUCT_SUCCESS, POST_PRODUCT_FAILURE } from "./actionTypes";

const productRequestPendingAction=()=>{
  return {type:GET_PRODUCT_REQUEST}
}
const productRequestSuccessAction=(payload)=>{
  return {type:GET_PRODUCT_SUCCESS, payload}
}
const productRequestFailureAction=()=>{
  return {type:GET_PRODUCT_FAILURE}
}







export const getProducts = (dispatch) => {
  // Complete get products functionality here
  dispatch(productRequestPendingAction())
  axios.get(` http://localhost:8080/products`)
  .then((res)=>{dispatch(productRequestSuccessAction(res.data))
    console.log(res,"res",res.data)
  })
  .catch(()=>dispatch(productRequestFailureAction()))

};


export const postProducts=(productdata)=>(dispatch)=>{
  dispatch({type:POST_PRODUCT_REQUEST})
  axios.post(`http://localhost:8080/products`,productdata)
  .then((res)=>{
    console.log(res,res.products,"resss post")
    dispatch({type:POST_PRODUCT_SUCCESS,payload:res.data})
  })
  .catch((err)=>{
    dispatch({type:POST_PRODUCT_FAILURE})
  })

}

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}