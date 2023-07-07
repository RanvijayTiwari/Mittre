import styled from "styled-components";
import { useState } from "react";
import { login } from "../Redux/AuthReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Login = () => {

  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const dispatch = useDispatch()

  console.log(email, password)
  const data = useSelector(store=>store.authReducer.isAuth)
  console.log(data)
  const HandleChance =()=>{
      dispatch(login({email, password}))
  }

  return (
    <DIV>
      <h2>Log In</h2>
      <input  type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={HandleChance}>Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;
  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }
  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;