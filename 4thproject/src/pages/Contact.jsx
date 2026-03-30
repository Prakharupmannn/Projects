import React, { useState } from 'react'

const Contact = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload

        console.log("Name:", name);
        console.log("Last Name:", lastName);
        console.log("Phone:", phoneNo);
        console.log("Email:", email);
        console.log("message: ", message);
    }

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
        
        <div className='flex justify-center mt-6'>
            <div className='font-bold text-4xl mt-6 text-black'>Contact Sales</div>
        </div>

        <div className='max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg'>

            <form onSubmit={handleSubmit} className='grid gap-4'>

                <div className='grid grid-cols-2 gap-4'>
                    <input 
                        type="text" 
                        placeholder='Name' 
                        onChange={(e)=>setName(e.target.value)} 
                        className='border border-gray-300 rounded p-2' 
                    />

                    <input 
                        type="text" 
                        placeholder='Last Name' 
                        onChange={(e)=>setLastName(e.target.value)} 
                        className='border border-gray-300 rounded p-2' 
                    />
                </div>

                <input 
                    type="text" 
                    placeholder='Phone Number' 
                    onChange={(e)=>setPhoneNo(e.target.value)} 
                    className='border border-gray-300 rounded p-2' 
                />

                <input 
                    type="email" 
                    placeholder='Email ID' 
                    onChange={(e)=>setEmail(e.target.value)} 
                    className='border border-gray-300 rounded p-2' 
                />

                <textarea 
                    placeholder='Your Message' 
                    rows="4" 
                    className='border border-gray-300 w-full rounded p-2'
                    onChange={(e)=>setMessage(e.target.value)}
                ></textarea>

                <div className='flex justify-center'>
                    <button 
                    type="submit"
                    className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 w-40"
                >
                    Send Message
                </button>
                </div>
                

            </form>

        </div>
    </div>
  )
}

export default Contact