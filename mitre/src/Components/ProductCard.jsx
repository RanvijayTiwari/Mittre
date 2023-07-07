import { useDispatch } from "react-redux";
// import { addToCart } from "../Redux/CartReducer/action";
import { styled } from "styled-components";

export const ProductCard = ({brand,image, price, title,category,color}) =>
{
  const dispatch = useDispatch()
  

// const HandleClick =()=>{
//   dispatch(addToCart({brand,image, price, title, discount}))
// }
  return (
    <DIV className="product-card" style={{displa:"grid"}}>
    
       <img src={image} alt="" className='product-image'/>
       <h3 className ='product-title'>{title}</h3>
       <p className='product-brand'>{brand}</p>
       <p className='product-price'>{price}</p>
       <p className='product-discount'>{category}</p>
       <p style={{color:{color}}}>{color}</p>
     

    </DIV>
  );
};
const DIV=styled.div`
  /* border:  solid black; */
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;

  .product-image{
    width: 90%;
    height: 300px;
  }

`