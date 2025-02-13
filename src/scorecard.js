import React, { useEffect, useState } from 'react'
import stadium from './images/stadium-3.jpg'
import {CirclePlus as IconCirclePlus} from 'lucide-react'
import {CircleMinus as IconCircleMinus} from 'lucide-react'


export default function Scorecard(){     
  const [scoreA,setScoreA]= useState(0);
  const [scoreB,setScoreB]= useState(0);
  useEffect(() => {
    if(scoreA<10 && scoreB<10){
      return;
    }

    if(scoreA==10){
      alert('team a');
    }

    if(scoreB==10){
      alert('team b');
    }
  },[scoreA,scoreB]);
  
  return (
    <div
    className="h-screen bg-cover bg-center bg-no-repeat m-0"
    style={{ backgroundImage: `url(${stadium})` }}>

    <h1 className='text-center text-4xl md:text-6xl p-4 md:p-9 text-white'>GameLedger</h1>

    <div className='flex flex-col md:flex-row justify-around mt-2 md:mt-6'>

    <div className='bg-[rgba(173,216,230,0.8)]  w-3.5/4 md:w-1/4 m-8 rounded-xl shadow-2xl'>
      <h1 className='text-center text-2xl md:text-4xl py-2 md:py-4 my-2 md:my-5 border-b-2 border-dotted border-gray-500'>Team A</h1>
      <h2 className='text-center text-6xl md:text-8xl my-3 md:my-5 '>{scoreA}</h2>

      <div className='flex justify-around my-7 md:my-10'>
      <IconCircleMinus
       size={40}
       onClick={()=>{
        setScoreA(scoreA - 1);}}/>

      <IconCirclePlus 
      size={40}
      onClick={()=>{
        setScoreA(scoreA + 1);}}/>
      </div>
    </div>

    <div className='bg-[rgba(173,216,230,0.8)]  w-3.5/4 md:w-1/4 m-8 rounded-xl shadow-2xl'>
      <h1 className='text-center text-2xl md:text-4xl py-2 md:py-4 my-2 md:my-5 border-b-2 border-dotted border-gray-500'>Team B</h1>
      <h2 className='text-center text-6xl md:text-8xl my-3 md:my-5 '>{scoreB}</h2>

      <div className='flex justify-around my-7 md:my-10'>
      <IconCircleMinus
       size={40}
       onClick={()=>{
        setScoreB(scoreB - 1);}}/>

      <IconCirclePlus 
      size={40}
      onClick={()=>{
        setScoreB(scoreB + 1);}}/>
      </div>
    </div>
   </div>

      <div className='flex justify-center'>
        <button className='text-3xl py-3 px-10 text-center rounded-xl bg-[rgba(173,216,230,0.8)] '
        onClick={()=>{
          setScoreA(0);
          setScoreB(0);
        }}>Reset</button>
      </div>
    </div>

  )
}
