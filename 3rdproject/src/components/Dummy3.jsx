import React, { useEffect, useState } from 'react'

const Dummy3 = () => {

    const [data,setData] = useState([]);

    const My_url = 'https://jsonplaceholder.typicode.com/users'
    
    async function getData(){
        const result = await fetch(`${My_url}`)
        const rs = await result.json()
        console.log(rs)
        setData(rs);
       
    }

    useEffect(()=>{ //fetching of api
        getData()
    },[])
    
  return (
    <div>
        {JSON.stringify(data)}
    </div>
  )
}

export default Dummy3