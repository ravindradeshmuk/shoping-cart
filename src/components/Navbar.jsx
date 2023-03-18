import React from 'react'
//import { Link } from 'react-router-dom'
import "./Navbar.css"
import {FiShoppingCart} from "react-icons/fi"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>

      <Link  to="/"> Shop </Link>
        <Link  to='/card'><FiShoppingCart/></Link>
       
    </div>
  )
}

export default Navbar