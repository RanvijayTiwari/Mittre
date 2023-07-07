import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";
import { styled } from "styled-components";


export const ProductList = () => {
  const dispatch = useDispatch()
 const data = useSelector(store=>store.productReducer.products)
 console.log(data)

  useEffect(()=>{
    dispatch(getProducts)
  },[])

  return (
    <DIV data-testid="product-list">
      {/* Map through products with ProductCard component  */}
      {data.map((item)=><ProductCard key={item.id} brand={item.brand} image={item.image}  title={item.title} price={item.price} category={item.category} 
       color={item.color} gender={item.gender} />)}
    </DIV>
  );
};

const DIV=styled.div`

display: grid;
grid-template-columns: repeat(3,1fr);
gap: 20px;
margin: auto;
margin-top: 40px;
  
`