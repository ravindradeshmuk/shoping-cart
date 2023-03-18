import React from 'react';
import "./product.css";
//import ShopContext from './Shop-context';

const Product = (props) => {
    const{id,productNmae,price,productImage}=props.data
    //const {AddToCard,cartItoms}=useContext(ShopContext)
   // const cardItomAmount =cartItoms()
  return (
   <>
   <div className='product'>
        
        <img src={productImage}/>
       
        <div className='description'>
           <p><b>{productNmae}</b></p>
           <p>${price}</p>
           <button className='btn'  >add to cart
          {/* {cardItomAmount > 0 && <>({cardItomAmount})</>} */}
           </button>
           </div>
           
           </div>
           </>   
   
  )
}

export default Product