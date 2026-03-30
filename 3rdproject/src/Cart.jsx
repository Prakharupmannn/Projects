import React from 'react'

const Cart = ({name,age,email}) => {
    console.log(name,age,email)
  return (
    <>
    <div className='bg-amber-500 w-100 h-full p-4 m-6 flex justify-between'>
        <h1 style={{textTransform:"capitalize"}}>{name}</h1>
        <h1>{age}</h1>
        <h1>{email}</h1>
    </div>
    </>
  )
}

export default Cart