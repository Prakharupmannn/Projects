import React from 'react'

const student = [

    { "name": "Prakhar", "id": 1, "rollno": 11, "branch": "Cse", "date": "11/22/23" },
    { "name": "ram", "id": 2, "rollno": 22, "branch": "Cse", "date": "11/22/23" },
    { "name": "mohan", "id": 3, "rollno": 33, "branch": "Cse", "date": "11/22/23" },
    { "name": "aniiii", "id": 4, "rollno": 44, "branch": "Cse", "date": "11/22/23" },
    { "name": "mohan", "id": 5, "rollno": 66, "branch": "Cse", "date": "10/22/23" }

]
    
const Demo = () => {

    const handleDate = (date) => {
        var d = new Date(date) //convert a date into "Javascript Date Object"
        let date01 = d.getDate()  
        let month = d.getMonth() + 1 //we add 1 for human readable
        let year = d.getFullYear()
        let dateformat = `${date01}-${month}-${year}`
        return dateformat
    }


    return (


        <div>

            <div className='flex justify-center text-2xl bg-black text-white p-5'>Student Details</div>

            <div className='mt-4 grid grid-cols-5 '>
                {student.map((item) => (
                    <div className='bg-amber-400 gap-3 m-2 p-4' key={item.id}>
                        <p className=''>Name: {item.name}</p>
                        <p>Id: {item.id}</p>
                        <p>Roll No.: {item.rollno}</p>
                        <p>Branch: {item.branch}</p>
                        <p>Date: {item.date}</p>
                        {/* <p>Date: {dateformat}</p> */}
                        <p>Date: {handleDate(item.date)}</p>
                        <hr />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Demo