import React, { useState } from 'react'

const Login = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("name: " , name);
        console.log("password: ", password);
    }

    

  return (
    <div>
        <form onSubmit={handleSubmit} className='border-2 p-6 items-center '>
            <div className='border w-60'>
                Name: {" "} <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>

            <div className='border w-70 mt-3'>
                Password: {" "}<input type="text" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}  required />
            </div>

            <button type='submit' className='bg-amber-500 rounded p-1 mt-3' >Login</button>
        </form>
    </div>
  )
}

export default Login

