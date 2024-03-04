import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import BlogDetail from '../components/BlogDetail';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog,setblog]=useState(null);
    const [relatedblogs,setrelatedblogs]=useState([]);
    const location =useLocation();
    const navigate=useNavigate();
    const {loading,setloading}=useContext(AppContext);
    const blogId =location.pathname.split("/").at(-1);
    console.log(blogId);
    async function fetchrelatedBlogs(){
        const url =`${newBaseUrl}get-blog?blogId=${blogId}`
        setloading(true);
        try{
            let res =await fetch(url);
            let data =await res.json();
            console.log(data);
            setblog(data.blog);
            setrelatedblogs(data.relatedBlogs);
        }
        catch(error){
            console.log("Error in api response",error);
            setblog(null);
            setrelatedblogs([]);
        }
        setloading(false);
    }
    useEffect(()=>{
        if(blogId)
        fetchrelatedBlogs();
    },[location.pathname])
  return (
    <div>
        <Header/>
        <div className='mt-[100px] mb-6 max-w-2xl mx-auto flex items-center space-x-2'>
        <button onClick={()=>(navigate(-1))} className=' border-2 border-gray-300 py-1 px-4 rounded-md'>Back</button>
        </div>
       
       {
        loading?(
            <div>Loading...</div>
        ):(
            blog?(
                <div>
                    <BlogDetail post={blog}/>
                    <h2 className='max-w-2xl mx-auto mt-12 font-bold text-3xl mb-8'>Related Blogs</h2>
                   <div className='flex flex-col gap-y-10  my-4'>
                   {
                        relatedblogs.map((relatedblog)=>(
                            <BlogDetail key={relatedblog.id} post={relatedblog}/>
                        ))
                    }
                   </div> 
                </div>
            ):(
                <div>
                    No Data Found
                </div>
            )
        )
       }
    </div>
  )
}

export default BlogPage