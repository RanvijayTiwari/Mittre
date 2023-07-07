import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
  const data = useSelector(store=>store.authReducer.isAuth)
  console.log(data)
  if(!data){
    return <Navigate to="/login"/>
  }
  return children

};
