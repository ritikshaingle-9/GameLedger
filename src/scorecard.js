import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import stadium from './images/stadium-3.jpg'
import Card from './card'

export default function Scorecard(){     
  const [scoreA,setScoreA]= useState(0);
  const [scoreB,setScoreB]= useState(0);
  const [winner,setWinner]= useState(null); 

  const MAX_SCORE=5;
  useEffect(() => {
    if(scoreA<MAX_SCORE && scoreB<MAX_SCORE){
      return;
    }

    if(scoreA==MAX_SCORE){
      setWinner("Team A");
      toast.success('Team A wins!!');
    }

    if(scoreB==MAX_SCORE){
      setWinner("Team B");
      toast.success('Team B wins!!');
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
    decreasescore={()=>setScoreA(scoreA -1)}
    winner={winner}/>

   <Card score={scoreB} teamName='Team B' 
    increasescore={()=>setScoreB(scoreB +1)}
    decreasescore={()=>setScoreB(scoreB -1)}
    winner={winner}/>
   </div>
   
   {winner?(
   <p className='text-center text-2xl text-white my-7'>Winner Team is <b className='underline decoration-wavy mx-4 bg-red-500 p-3'>"{winner}🏆🏆"</b>.Click reset to start again</p>):null
   }

    <div className='flex justify-center'>
      <button className='text-2xl md:text-3xl py-3 px-7 md:px-10 text-center rounded-xl bg-[rgba(173,216,230,0.8)] '
      onClick={()=>{
          setScoreA(0);
          setScoreB(0);
          setWinner(null);
      }}>Reset</button>
    </div>
    <Toaster/>
    </div>
  )
}
