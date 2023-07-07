import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Homepage } from "./Homepage";
// import { CartPage } from "./CartPage";
import { PrivateRoute } from "../Components/PrivateRoute";
import Adminpage from "./Adminpage";
export const MainRoutes = () => {
  return (
    <Routes>
      {/* Provide all Routes here */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
      <Route path="/" element={<Homepage/>}></Route>
      
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/admin" element={<PrivateRoute><Adminpage/></PrivateRoute>}></Route>
    </Routes>
  );
};
// <Link to={"/"}>Home</Link>
// <Link to={"/cart"}>Cart</Link>
// <Link to={"/login"}>Login</Link>