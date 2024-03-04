import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import BlogDetail from './BlogDetail';

const Blogs = () => {
    const {posts,loading}=useContext(AppContext);
  return (
    <div className='flex flex-col gap-y-10  my-[80px]'>
        { loading?(<div className='min-h-[80vh] w-full flex justify-center items-center'>
        <p className='text-center font-bold text-3xl'>Loading...</p></div>):(
            posts.length==0?(<div className='min-h-[80vh] w-full flex justify-center items-center'>
            <p className='text-center font-bold text-3xl'>No Blog found!</p></div>):(
               
                    
                        posts.map((post)=>(
                        <BlogDetail key={post.id} post={post}/>
                    ) )
                    
                
            )
        )
        }
    </div>
  )
}

export default Blogs