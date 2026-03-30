import React, { useEffect,useState} from 'react';
import student  from './data.js';

const Dammy = () => {

    const [data, setData] = useState([])

    // const handlecolor = (status) => {
    //     return status === "active"
    //     ? "bg-red-500 text-white px-2 py-1 rounded inline-block flex"
    //     : "bg-green-500 text-white px-2 py-1 rounded inline-block flex";
    // }

// api call useEffect 

const base_url = 'https://jsonplaceholder.typicode.com/users'

 async function getData(){
    let result = await fetch(`${base_url}`)
    let res = await result.json()
    setData(res)
    console.log(res)
}

useEffect(()=>{
    getData()
},[])

  return (
    <div>
        
    <div className='grid grid-cols-5 gap-5 p-2 bg-pink-200'>
        {student.map((item) => (
            <div key={item.id} >
                <p>Id: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Roll No: {item.academic.rollno}</p>
                <p>Branch: {item.academic.branch}</p>
                <p>Date: {item.meta.date}</p>
                <p>Status: 
                   <span
                className={
                item.meta.status === "active"
                  ? "bg-red-500 text-white px-2 py-1 rounded"
                  : "bg-green-500 text-white px-2 py-1 rounded  "
                  } 
                >
                  {item.meta.status}
                </span>
                </p>

                {/* <p>Status: 
                    <span className={handlecolor(item.meta.status)}>
                        {item.meta.status}
                    </span></p> */}



                {/* <p>Status: 
                <span
                className={`ml-2 px-2 py-1 rounded text-white ${
                item.meta.status === "active"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}>
              {item.meta.status}
             </span>
            </p> */}

            <hr />
            </div>
        ))}
    </div>

    {JSON.stringify(data)}

    </div>
  )
}

export default Dammy