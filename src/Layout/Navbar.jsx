import React from 'react'
import { useNavigate } from 'react-router';


function Navbar() {
    const navigate = useNavigate();

  const handleNavigation = () => {
    // 1. Run your logic here (e.g., authentication)
    console.log("Processing before redirect...");
    
    // 2. Trigger the page change programmatically
    navigate('/product');
  };
  
  return (
    <>


    <button type="button" onClick={handleNavigation}>
        Login & Redirect
    </button>



    </>
  )
}


export default Navbar