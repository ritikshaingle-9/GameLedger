import React from 'react'
import stadium from './images/stadium-3.jpg'

export default function Scorecard(){       
  return (
    <div
    className="h-screen bg-cover bg-center bg-no-repeat m-0"
    style={{ backgroundImage: `url(${stadium})` }}>

    <h1 className='text-center text-5xl p-5 text-white'>GameLedger</h1>

   <div className='flex justify-around mt-15'>

    <div className='bg-white w-1/4 m-8'>
      <h1 className='text-center text-4xl py-4 my-5 border-b-2 border-dotted border-gray-500'>Team 1</h1>
      <h2 className='text-center text-7xl my-5'>0</h2>
    </div>

    <div className='bg-white w-1/4 m-8'>
      <h1 className='text-center text-4xl py-4 my-5 border-b-2 border-dotted border-gray-500'>Team 2</h1>
      <h2 className='text-center text-7xl my-5'>0</h2>
      <CirclePlus/>
      <CircleMinus />
    </div>
    
    
   </div>


    </div>

  )
}
