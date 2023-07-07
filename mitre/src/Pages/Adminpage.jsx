import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { postProducts } from '../Redux/ProductReducer/action'
import { styled } from 'styled-components'

const initial={
    name:'',
    image:'',
    brand:'',
    price:'',
    category:'',
    color:'',
    gender:''
}
const Adminpage = () => {
    const [productdata,setproductdata]=useState(initial)
    const dispatch=useDispatch()

     
    const handlechange=(e)=>{
        const {value,name}=e.target
        console.log(value,name)
        setproductdata((prev)=>{
            return {...prev,[name]:name==="price"? +value:value};
        })

    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        dispatch(postProducts(productdata))

    }


  return (
    <DIV>
      <form onSubmit={handlesubmit} >
    <input type="text" name="name" onChange={handlechange} value={productdata.name} placeholder='Name' />
    <input type="text" name="image" onChange={handlechange} value={productdata.image} placeholder='Image'/>
    <input type="text" name="brand" onChange={handlechange} value={productdata.brand} placeholder='Brand'/>
    <input type="text" name="price" onChange={handlechange} value={productdata.price} placeholder='Price' />
    <select name="gender" onChange={handlechange} value={productdata.gender} >
        <option value="" >Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="kids">Kids</option>

    </select>
    <select name="category" onChange={handlechange} value={productdata.category} >
    <option value="">Select Category </option>
        <option value="top-wear">Top Wear</option>
        <option value="bottom-wear">Bottom Wear</option>
        <option value="foot-wear">Foot Wear</option>
    </select>
    <select name="color" onChange={handlechange} value={productdata.color} >
    <option value="">Select Color</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="white">White</option>
        <option value="black">Black</option>
    </select>
    <button type='submit'>Add Product</button>
      </form>
    </DIV>
  )
}

const DIV=styled.div`
width: 400px;
margin: auto;
border: 1px solid black;
margin-top: 50px;
/* height: auto; */
    form{
        display: flex;
        flex-direction:column ;
        gap:20px;
        padding: 30px;
        
    }
    form>input,select,button{
        padding: 10px;
    }

`

export default Adminpage
