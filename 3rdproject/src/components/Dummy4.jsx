import React, { useEffect, useState } from 'react'

const Dummy4 = () => {

    const [data,setData] = useState([]);

    async function Apidata() {
        
        const MY_URL = "http://192.168.1.36:5000/api/v1/users";

        const res = await fetch(`${MY_URL}`)

        const result = await res.json();


        console.log(result.data);

        setData(result.data);
    }

    useEffect(()=> {
        Apidata();
    },[])

  return (
    <div>

        <div className='p-5 border'>
            {data?.map((item, index) => {
                return (
                    <div key={item.id}>
                        <div>
                            {item.name}
                            {item.college}
                            {item.isActive ? "True" : "False"}
                            {item.profile.age}
                            {item.profile.gender}
                            {item.profile.email}
                        </div>
                        <div>
                            {item.courses.map((item , i) => {
                                return (
                                <div key={i}>
                                    <p>{item.courseName}</p>
                                    <p>{item.duration}</p>
                                    <p>{item.completed ? "True" : "False"}</p>

                                    <div>
                                        {item.marks.map((item, i) => {
                                            return (
                                                <div key={i}>
                                                    <p>{item.subject}</p>
                                                    <p>{item.score}</p>
                                                </div>
                                            )
                                        }) }
                                    </div>
                                </div>
                                )
                            })}

                        </div>
                        <div>
                            {item.attendance?.totalClasses}
                            {item.attendance?.attended}
                            {item.attendance?.percentage}
                            {item.performance?.grade}
                            {item.performance?.passed}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Dummy4