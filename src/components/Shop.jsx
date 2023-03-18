import React from 'react'
import PRODUCTS from './product.js'
import Product from './Product.jsx'
import "./Shop.css"
const Shop = () => {
  return (
    <>
    <div className='shop'>
     <div >
    <h1>pedroTech shop</h1>
   </div>
  
    
    {/* s */}
    <div  className='container'>
    
      {PRODUCTS.map((product)=>{

     return<Product data={product}/>
    })}
    </div>
    </div>
    
    </>
  )
}

export default Shop