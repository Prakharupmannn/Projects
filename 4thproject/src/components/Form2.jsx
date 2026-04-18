import React, { useEffect , useState } from 'react'


const Form2 = () => {

    const [data, setData] = useState([]);

    const [editId, setEditId] = useState(null);

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    
    const [date, setDate] = useState('');

    const [city, setCity] = useState('');

    const [department, setDepartment] = useState('');


    async function getdata() {
 
        const My_URL = 'http://192.168.1.36:5000/api/v1/users';

        const res = await fetch (`${My_URL}`);

        const result = await res.json()

        setData(result.data);
        
    }

    useEffect(()=>{
        getdata();
    },[])

    const handleId=(item)=>{

        setEditId(item.id)
        setName(item.name)
        setEmail(item.email)
        setDate(item.date)
        setCity(item.city)
        setDepartment(item.department)
    }

    const handlesave = (id)=>{
        const updateddata = data.map((item) => 
        item.id === editId
        ? { ...item, name, email, date, city, department}
        : item
        )

        setData(updateddata)
        console.log(updateddata)
        setEditId(null)
    }


  return (
    <div>
        <div className='grid grid-cols-0 h-screen'>
            {/* Left Side */}
            <div className='w-full bg-gray-200'>
                
            </div>

            {/* Right Side */}
            <div className='w-full'>
                <table className=' p-2 w-full border border-gray-400'>
                    <thead className=''>
                        <tr className='bg-gray-300'>
                            <th className="p-2 border border-gray-400 ">ID</th>
                            <th className="p-2 border border-gray-400">NAME</th>
                            <th className="p-2 border border-gray-400">EMAIL</th>
                            <th className="p-2 border border-gray-400">DATE</th>
                            <th className="p-2 border border-gray-400">CITY</th>
                            <th className="p-2 border border-gray-400">DEPARTMENT</th>
                            <th className="p-2 border border-gray-400">ACTION</th>
                        </tr>
                    </thead>

                    <tbody className='w-full'>
                
                      { data?.map((item)=>(
                        <tr key={item.id}>
                          
                        <td className='min-w-[100px] px-4' >{ item.id}</td>
                        <td className='min-w-[140px] px-4'>{ editId === item.id? 
                        <input onChange={(e)=>setName(e.target.value)} value={name} className='border w-full'/> : item.name}</td>
                        <td className='min-w-[100px] px-4'>{ editId === item.id? 
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border w-full'/> : item.email}</td>
                        <td className='min-w-[120px] px-4'>{ editId === item.id? 
                        <input onChange={(e)=>setDate(e.target.value)} value={date} className='border'/> : item.date}</td>
                        <td className='min-w-[100px] px-4'>{ editId === item.id? 
                        <input onChange={(e)=>setCity(e.target.value)} value={city } className='border'/> : item.city}</td>
                        <td className='min-w-[100px] px-4'>{ editId === item.id? 
                        <input onChange={(e)=>setDepartment(e.target.value)} value={department} className='border'/> : item.department}</td>
                        <td>
                            {editId === item.id ? (
                                <button className='bg-red-500 rounded border
                             border-white text-white min-w-[100px] px-4'
                             onClick={()=>handlesave(item)}
                             >
                                Save
                            </button>
                            ) : (
                                <button className='bg-red-500 rounded border
                             border-white text-white min-w-[100px] px-4'
                             onClick={()=>handleId(item)}
                             >
                                Edit
                            </button>
                            )
                            
                            }
                            
                        </td>
                       </tr>
                      ))  
                      }
                       
                    </tbody>

                </table>
                
            </div>
        </div>
    </div>
  )
}

export default Form2