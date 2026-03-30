import React from 'react'


const Navbar = () => {
  return (
    <div className='bg-black text-white w-full flex justify-between p-5'>

        <div className='text-2xl font-bold'>MY APP</div>

        <div className='flex gap-6 items-center text-xl '>
            
            <a href="/Home">Home</a>
            <a href="/Aboutus">About Us</a>
            <a href="/Contact">Contact</a>
            <a href="/Signin">Signin</a>
        </div>

        <button className='border rounded flex p-2 cursor-pointer hover:bg-amber-300 hover:text-black'>Login</button>

    </div>
  )
}

export default Navbar