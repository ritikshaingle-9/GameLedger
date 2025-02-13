import React from 'react'
import {CirclePlus as IconCirclePlus} from 'lucide-react'
import {CircleMinus as IconCircleMinus} from 'lucide-react'

export default function Card({score,increasescore,decreasescore,teamName,winner}) {
    const isWinner = winner === teamName;
  return(
       
       <div className='bg-[rgba(173,216,230,0.8)]  w-3.5/4 md:w-1/4 m-8 rounded-xl shadow-2xl'>
       <h1 className='text-center text-2xl md:text-4xl py-2 md:py-4 my-2 md:my-5 border-b-2 border-dotted border-gray-500'>{teamName}{isWinner?"🏆":""}</h1>
       <h2 className='text-center text-6xl md:text-8xl my-3 md:my-5 '>{score}</h2>
    
    {winner? null:(
     <div className='flex justify-around my-7 md:my-10'>
    <IconCircleMinus size={40} onClick={decreasescore}/>
    <IconCirclePlus size={40} onClick={increasescore}/>
    </div>
    )}
    </div>
  );
}