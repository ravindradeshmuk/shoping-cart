import React from 'react'
//import Product from './Product'
import PRODUCTS from './product.js'
import Product from './Product.jsx'
import "./card.css"
const Card = () => {
  return (
    <div className='card'>
     <div >
    <h1>youre card Itoms</h1>
   </div>
  
    
    {/* s */}
    <div  className='containercolum'>
    
      {PRODUCTS.map((product)=>{

     return<Product data={product}/>
    })}
    </div>
    </div>
  )
}

export default Card