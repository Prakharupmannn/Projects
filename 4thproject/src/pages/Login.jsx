import React, { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [role,setRole] = useState("") // radio state
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("name: " , name);
        console.log("password: ", password);
        console.log("role: ",role);

        if(role === 'admin') {
            Navigate("/admin")
        } 
        else if(role === 'user') {
            Navigate("/user")
        }
        else{
            alert("Please select a role")
        }
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

            <div className='mt-3'>
                Admin:<input type="radio" name='role' value="admin" checked={role === "admin"} onChange={(e) => setRole(e.target.value)}/>

                User: <input type='radio' name='role' value="user" checked={role === "user"} onChange={(e)=> setRole(e.target.value)}/>
            </div>

            <button type='submit' className='bg-amber-500 rounded p-1 mt-3' >Login</button>
        </form>
    </div>
  )
}

export default Login

