import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Card from './components/Card'

import Navbar from './components/Navbar'
import Shop from './components/Shop'
//import {ShopContextProvider} from './components/Shop-context'

const App = () => {
  return (
    <div>
    {/* <ShopContextProvider> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<Shop/>}/>
        <Route path='/card' element={<Card/>}/>
      </Routes>
      </BrowserRouter>
  
  {/* </div> </ShopContextProvider> */}
    </div>
  )
}

export default App