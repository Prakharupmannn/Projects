import React from 'react'

const Form = () => {

    // const [name, setName] = useState("");
    // const [password, setPassword] = useState("");

  return (
    <div className='flex h-screen'>

        {/* LEFT SIDE*/}
        <div className='w-1/2 bg-gray-200 p-6'>
            <h2 className='text-2xl font-bold mb-4'>Form Section</h2>

            <label className='block text-lg font-medium mb-2'>Name:</label>
            <input type="text" value={name} placeholder='ENTER YOUR NAME' className='w-full p-2 border border-gray-400 rounded mb-2' />

            <label className='block text-lg font-medium mb-2'>Password:</label>
            <input type="Password"  placeholder='ENTER YOUR PASSWORD' className='w-full p-2 border border-gray-400 rounded mb-2' />
            
            <label className='block text-lg font-medium mb-2'>City:</label>
            <select name="city" className='w-full mb-3 p-2 border border-gray-400 rounded' >
          <option value="">Select city</option>
          <option>Jabalpur</option>
          <option>Bhopal</option>
          <option>Indore</option>
          <option>Sagar</option>
          <option>Rewa</option>
        </select>

        
        </div>
        {/* RIGHT SIDE */}
        <div>

        </div>
    </div>
  )
}

export default Form