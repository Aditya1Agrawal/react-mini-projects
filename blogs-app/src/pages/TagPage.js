import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigate =useNavigate();
    const location =useLocation();
    const tag =location.pathname.split("/").at(-1);
  return (
    <div>
    <Header/>
    <div className='mt-[100px] mb-6 max-w-2xl mx-auto flex items-center space-x-2'>
            <button onClick={()=>(navigate(-1))} className='border-2 border-gray-300 py-1 px-4 rounded-md'>Back</button>
            <h2 className='text-xl font-bold'>Blogs on #{tag}</h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default TagPage