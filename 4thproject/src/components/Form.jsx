import React, { useState } from 'react'
import { useEffect } from 'react';

const Form = () => {

    // const [name, setName] = useState("");
    // const [password, setPassword] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        password: "",
        city: "",
        date: "",
        text: "",
    });

    // const [tableData , setTableData] = useState(() => {
    //     // const savedData = localStorage.setItem(,"tableData",tableData);
    //     // return savedData ? JSON.parse(savedData) : [];
  
    // });



    const [editIndex, setEditIndex] = useState(null);

    // storing in local storage
    useEffect(()=> {
        const savedData = JSON.parse(localStorage.getItem("formData")) || [];
        setTableData(savedData)
    },[])

    //handle input change

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(editIndex === null ) {
            //add
            setTableData([...tableData , formData]); // add new row
        } else {
            //update
            const updateData = [...tableData];
            updateData[editIndex] = formData;
            setTableData(updateData);

            setEditIndex(null); // reset
        }

        setFormData({ // refresh data after submit
            name: "",
            password: "",
            city: "",
            date: "",
            text: "",
        })
    }

    //handle edit button
    const handleEdit = (index) => {
        setFormData(tableData[index])
        setEditIndex(index)
    }

    const handleDelete = (index) => {
        const updatedTable = tableData.filter((item,i) => i !== index);
        setTableData(updatedTable);
        
        localStorage.setItem("formData", JSON.stringify(setTableData));
    }

    

  return (
    <div className='flex h-screen '>

        {/* LEFT SIDE*/}
        <div className='w-1/2 bg-gray-200 p-6'>
            <h2 className='text-2xl font-bold mb-4'>Form Section</h2>

            <form onSubmit={handleSubmit}>
            <label className='block text-lg font-medium mb-2'>Name:</label>
            <input type="text" required name="name" value={formData.name} onChange={handleChange} placeholder='ENTER YOUR NAME' className='w-full p-2 border border-gray-400 rounded mb-2' />

            <label className='block text-lg font-medium mb-2'>Password:</label>
            <input type="Password" required name='password' value={formData.password} onChange={handleChange} placeholder='ENTER YOUR PASSWORD' className='w-full p-2 border border-gray-400 rounded mb-2' />
            
            <label className='block text-lg font-medium mb-2'>City:</label>
            <select name="city" required value={formData.city} onChange={handleChange} className='w-full mb-3 p-2 border border-gray-400 rounded' >
                <option value="">Select city</option>
                <option>Jabalpur</option>
                <option>Bhopal</option>
                <option>Indore</option>
                <option>Sagar</option>
                <option>Rewa</option>
            </select>

            <label className='block text-lg font-medium mb-2'>Date:</label>
            <input type="date" required name='date' value={formData.date} onChange={handleChange} className='w-full p-2 border border-gray-400 rounded mb-2'/>

            <label className='block text-lg font-medium mb-2'>Text:</label>
            <textarea required placeholder="Write something..." name='text' value={formData.text} onChange={handleChange}
              className='w-full p-2 border border-gray-400 rounded mb-2'
              rows="2"></textarea>

            <button className='bg-black rounded text-amber-50 p-2 '>{editIndex === null ? "Submit" : "Update"}</button>
            </form>
        </div>
        {/* RIGHT SIDE */}
        <div>
            <div className='w-1/2 bg-white p-6'>
                <h2 className='text-2xl font-bold mb-4 w-full'>Preview Section</h2>

                    <table className="w-full border border-gray-400">
                    <thead>
                    <tr className="bg-gray-300">
                    <th className="p-2 border border-gray-400">Name</th>
                    <th className="p-2 border border-gray-400">Password</th>
                    <th className="p-2 border border-gray-400">City</th>
                    <th className="p-2 border border-gray-400">Date</th>
                    <th className="p-2 border border-gray-400">Text</th>
                </tr>
                </thead>

                <tbody>
                    {tableData?.length > 0 ? (
                        tableData?.map((item, index) => (
                            <tr key={index}>
                                <td className="p-2 border border-gray-400">{item.name}</td>
                                <td className="p-2 border border-gray-400">{item.password}</td>
                                <td className="p-2 border border-gray-400">{item.city}</td>
                                <td className="p-2 border border-gray-400">{item.date}</td>
                                <td className="p-2 border border-gray-400">{item.text}</td>

                                <td className='p-2 border border-gray-400'>
                                    <button onClick={() => handleEdit(index)} className='bg-blue-600 text-white px-3 py-1 rounded'>
                                        Edit
                                    </button>
                                </td>
                                <td className='p-2 border border-gray-400'>
                                    <button onClick={() => handleDelete(index)} className='bg-blue-600 text-white px-3 py-1 rounded'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )) 
                    ) : (
                        <td colSpan="5" className='p-4 text-center text-gray-500'>NO DATA SUBMITTED YET</td>
                    )}
                </tbody>
                </table>
                </div>
            </div>
        </div>
  )
}

export default Form