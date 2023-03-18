// import React, { createContext, useState } from 'react'
// import PRODUCTS from './product';
//   const ShopContext=createContext(null)
// const getDefaultCard=()=>{
//     let cart={};
//     for(let i=0; i<PRODUCTS.length +1; i++){
//      cart[i]=0;
//     }
//     return cart;

//   }
//   const ShopContextProvider = (props) => {
//   const[cardItom,setCardItom]=useState(getDefaultCard());
//   const  addToCart=(itemId)=>{
//   setCardItom((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//   }
//   const  removeFromCart=(itemId)=>{
//     setCardItom((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }
  
//     const ContextValue={cardItom,addToCart,removeFromCart}
//     console.log(cardItom)
//     return <ShopContext.Provider value={ContextValue}>{props.children}</ShopContext.Provider>
  
// }
  
// export default ShopContextProvider;