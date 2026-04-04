import React from 'react'
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <div>
        <div className='bg-black text-white flex justify-between items-center p-4 text-2xl'>
            <div>
                My App
            </div>

            <div className='flex gap-8'>
                <Link to="/Home">Home</Link>
                <Link to="/Aboutus">About Us</Link>
                <Link to="/Login">Login</Link>
            </div>

            <div>
                Profile
            </div>
        </div>
    </div>
  )
}

export default Navbar2