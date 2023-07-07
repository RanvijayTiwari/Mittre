import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <DIV>
      <h2 className="title">ADAVYA </h2>
      <div >
      <Link style={{margin:"20px",color:"red"}} to={"/"}>Home</Link>
     
      <Link style={{margin:"20px",color:"red"}} to={"/login"}>Login</Link>
      <Link style={{margin:"20px" ,color:"red"}} to="/admin">Admin</Link>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  display: flex;
  /* border-bottom: 1px solid gray; */
  gap: 20px;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  background-color: blanchedalmond;

  .title{
    border:  solid rgb(60, 60, 60) ;
    background-color: rgb(60, 60, 60);
    padding: 10px;
    border-radius:10px;
  }
  
`;
