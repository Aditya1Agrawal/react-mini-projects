import React,{useState} from 'react'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import { Card } from './Card';
export const Testimonial = ({reviews}) => {
    const[index,setindex]=useState(0);
    function leftshiftHandler(){
        if(index-1>=0){
            setindex(index-1);
        }
        else setindex(reviews.length-1);
    }
    function rightshiftHandler(){
        if(index+1<=reviews.length-1){
            setindex(index+1);
        }
        else setindex(0);
    }
    function randomshiftHandler(){
        setindex(Math.floor(Math.random()*(reviews.length)));
    }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center
    items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
        <Card review={reviews[index]}></Card>
        <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold 
        mx-auto'>
            <button onClick={leftshiftHandler} className='cursor-pointer hover:text-violet-500'><FaChevronLeft/></button>
            <button onClick={rightshiftHandler} className='cursor-pointer hover:text-violet-500'><FaChevronRight/></button>
        </div>
        <div className='mt-6'>
        <button onClick={randomshiftHandler} className='bg-violet-400 hover:bg-violet-500 transition duration-200 
        cursor pointer px-10 py-2 rounded-md font-bold text-white text-lg '>Surprise Me</button>
        </div>
    </div>
  )
}
