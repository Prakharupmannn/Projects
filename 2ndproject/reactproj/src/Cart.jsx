import React from 'react'

const Cart = ({name,age}) => {
    console.log(name,age)
  return (
    <>
    <div className='bg-amber-200 w-100 h-20 m-5 p-5'>
    <h1 style={{textTransform:"capitalize"}}>{name}</h1>
     <h1>{age}</h1>
    </div>
    
    </>
  )
}

export default Cart