import React from 'react'

const Day6 = () => {

    const arr = [10,20,30,40,50,60,70,80];
//    const newarr  = arr.map((ele)=>ele >30)
//    console.log(typeof(newarr))

//   const res =  arr.map((item , index) => 
//     {return(item > 30 ? (item = {item}) : null )})
//   console.log(res.item)

     var res  = arr.filter  ((item)=>item > 30)
     console.log(res)

  return (
    <div>
        {/* <div>
            {arr.map((item,index) => {
                 if (item > 30) {
                    return (
                        <h1 key={index}>
                            item : {item}
                        </h1>
                    )
                 }
            })}
        </div> */}

        <div>
            {res}
        </div>
            {/* <h1>{JSON.stringify(newarr)}</h1> */}
    </div>
  )
}

export default Day6