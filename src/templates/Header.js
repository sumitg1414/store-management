import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
   <div>
    <nav className='bg-white  d-flex text-center justify-content-around p-2 ps-3'>
       <div >
   
       <h1 className='text-black '>
       <i className="bi bi-shop me-5"></i>
         STORE MANAGEMENT
       </h1>
      
        
        </div>
        <div className=' w-50   mt-2 me-5'>
        <Link className='btn btn-dark me-3' to={'/add'}>Add Product</Link>
        <Link className='btn btn-dark me-3 ' to={'/view'}>View Product</Link>
        </div>
    
   
    </nav>
    </div>
  )
}

export default Header