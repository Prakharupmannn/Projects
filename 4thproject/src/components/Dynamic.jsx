import React from 'react'

const Dynamic = () => {
  return (
    <div>

        <form className='grid grid-cols-4 gap-5 p-10'>
            <input type="text" placeholder='Enter Name' className='border border-gray-400 rounded'/>

            <input type="number" placeholder='Enter Age' className='border border-gray-400 rounded'/>

            <input type="number" placeholder='Enter Phone Number' className='border border-gray-400 rounded'/>

            <button type='submit' className='bg-black text-white w-20 rounded'>Add</button>
        </form>

    </div>
  )
}

export default Dynamic