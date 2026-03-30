import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-screen w-64 bg-gray-900 text-white p-5'>

      {/* LOGO / TITLE */}
      <h1 className='text-2xl font-semibold mb-8'>
        MY APP
      </h1>

      {/* Items */}
      <ul className='space-y-6'>
        <li>
          <a href="" className='block hover:text-gray-300 transition'>
            Dashboard
          </a>
        </li>

        <li>
          <a href="" className='block hover:text-gray-300 transition'>
            Profile
          </a>
        </li>

        <li>
          <a href="" className='block hover:text-gray-300 transition'>
            Login
          </a>
        </li>

        <li>
          <a href="" className='block hover:text-gray-300 transition'>
            Settings
          </a>
        </li>

        <li>
          <a href="" className='block hover:text-gray-300 transition'>
            Edit
          </a>
        </li>

        <li>
          <a href="" className='block hover:text-gray-300 transition'>
            Details
          </a>
        </li>

        <li>
          <a href="" className='block hover:text-gray-300 transition'>
            Logout
          </a>
        </li>
      </ul>

    </div>
  )
}

export default Sidebar