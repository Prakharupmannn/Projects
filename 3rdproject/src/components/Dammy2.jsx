import React from 'react'
import data from './data.js'


const Dammy2 = () => {
  return (
    <div>

        <div className='p-5 border'>
            {data.map((item) => (
                <div key={item.id} className='m-5 bg-amber-500 p-5 w-100'>
                    <p>Id: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Username: {item.username}</p>
                    <p>Email: {item.email}</p>
                    <p>Street: {item.address?.street}</p>
                    <p>Suite: {item.address?.suite}</p>
                    <p>lat: {item.address?.geo?.lat}</p>
                    <p>lng: {item.address?.geo?.lng}</p>
                    <p>Phone: {item.phone}</p>


                    <p>Rights: {item.rights?.join(", ")}</p>

                    {/* <div>
                    <p>Rights:</p> 
                    <ul>
                        {item.rights?.map((role) => 
                            <li>{role}</li>
                        )}
                    </ul>  
                    </div>
         */}
                    <p>Company: {item.company.name}</p>
                    <hr />
                </div>
            ))}
        </div>

    </div>
  )
}

export default Dammy2