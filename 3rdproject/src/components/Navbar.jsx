import React from 'react'


const Navbar = () => {
  return (
    <nav className='bg-gray-900 px-6 py-6 flex justify-between items-center shadow-md'>

        {/* logo */}
        <h1 className='text-white text-2xl font-semibold'>
            My App
        </h1>

        {/* links */}
        <div className='flex gap-8'>
            <a href="/" className='text-white hover:text-gray-300 transition duration-300'>Home</a>
            <a href="/about" className='text-white hover:text-gray-300 transition duration-300'>About us</a>
            <a href="" className='text-white hover:text-gray-300 transition duration-300'>Services</a>
            <a href="" className='text-white hover:text-gray-300 transition duration-300'>Contact</a>
       
        </div>

        <button className='bg-gray-300 rounded-xl h-9 w-17 hover:bg-white'>Login</button>

    </nav>
  )
}

export default Navbar