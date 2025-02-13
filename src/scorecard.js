import React, { useEffect, useState } from 'react'
import stadium from './images/stadium-3.jpg'
import Card from './card'

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
    style={{ backgroundImage: `url(${stadium})`}}>

    <h1 className='text-center text-4xl md:text-6xl p-4 md:p-9 text-white'>GameLedger</h1>

    <div className='flex flex-col md:flex-row justify-around mt-2 md:mt-6'>
    <Card score={scoreA} teamName='Team A' 
    increasescore={()=>setScoreA(scoreA +1)}
    decreasescore={()=>setScoreA(scoreA -1)}/>

   <Card score={scoreB} teamName='Team B' 
    increasescore={()=>setScoreB(scoreB +1)}
    decreasescore={()=>setScoreB(scoreB -1)}/>
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
