import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Product from './Pages/Product.jsx'
import Contact from './Pages/Contact.jsx'
import Root from './Layout/Root.jsx'
import Navbar from './Layout/Navbar.jsx'



function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>

        <Route path='/' element={ <Root/> }>
        
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/about' element={ <About/> }></Route>
        <Route path='/product' element={ <Product/> }></Route>
        <Route path='/contact' element={ <Contact/> }></Route>
        <Route path='/nav' element={ <Navbar/> }></Route>
    
        </Route>


      </Routes>
    
    
    
    </BrowserRouter>
    
    
    
    
    
    </>
  )
}

export default App