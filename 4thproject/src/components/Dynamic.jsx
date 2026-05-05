import React, { useState } from 'react'

const Dynamic = () => {
  
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [mobile, setMobile] = useState('')

  return (
    <div>

      <div className='grid grid-cols-4 p-5 gap-3 rounded '>
        <input value={name} className='border border-black rounded h-10' onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter your Name'/>
        <input value={mobile} className='border border-black rounded' type="text" onChange={(e)=>setMobile(e.target.value)} placeholder='Enter your mobile'/>
        <input value={age} className='border border-black rounded' type="number" onChange={(e)=>setAge(e.target.value)} placeholder='Enter your age'/>
        <button className='bg-black text-white rounded'>Add</button>
      </div>
      <div className='flex justify-center'>
        <button className='bg-blue-400 rounded w-20 h-10 '>Submit</button>
      </div>

    </div>
  )
}

export default Dynamic