import React, { useEffect, useState } from 'react'

const Day5 = () => {

    const [data,setData] = useState("prakhar");

    const arr = [1,2,3,4,5,6,7,8,9,"prakhar"]

    const [counter, setCounter] = useState(0);

    const [increment, setIncrement] = useState(0);

    const [decrement, setDecrement] = useState(0);

    const [tcount, setTcount] = useState(0);

  return (
    <div>
        {/*1st-proj
        
        <div>
            {arr.map((item,index) => {
                
                return (
                    <div key={index}>
                        {JSON.stringify(item + 10)}
                    </div>
                )
            })}
        </div> */}

        {/*2nd-proj
        
        <h1 className='p-4 flex justify-center'>{data}</h1>

        <button onClick={()=>setData("Aruuuuuuu")} style={{border:1, backgroundColor:'red', padding:5, width: "100%" }}>
            change 
        </button> */}

        <div className='flex justify-center bg-amber-400'>
            Count : {counter}
        </div>

        <div className='grid grid-cols-2 p-4'>
            <div>
                Increment Count : {increment}
            </div>
            <div>
                Decrement Count : {decrement}
            </div>
        </div>

        

        <div className='flex justify-center gap-6 p-9 text-2xl'>

            <button onClick={() => {setCounter(counter+1); setIncrement(increment+1); setTcount(tcount + 1); }} className='bg-red-500 rounded p-2'>Increment</button>

            <button onClick={()=> {setCounter(counter - 1); setDecrement(decrement + 1);  setTcount(tcount + 1);}} className='bg-red-500 rounded p-2'>Decrement</button>
        </div>

        <div className='flex justify-center'>
            TotalCount : {tcount}
        </div>


    </div>
  )
}

export default Day5