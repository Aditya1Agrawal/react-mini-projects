import { createContext, useState } from "react"
import {baseUrl} from "../baseUrl"
import { useNavigate } from "react-router-dom";
export const AppContext=createContext();
const AppContextProvider = ({children}) => {
 const[posts,setposts]=useState([]);
 const[loading,setloading]=useState(false);
 const[page,setpage]=useState(1);
 const[totalPages,settotalpages]=useState(null);
 const navigate=useNavigate();
async function fetchBlogPosts(page=1,tag=null ,category){
    setloading(true);
    let url=`${baseUrl}?page=${page}`
    if(tag){
        url+=`&tag=${tag}`
    }
    if(category)url+=`&category=${category}`
    try{
        let res=await fetch(url);
        let data=await res.json();
        if (!data.posts || data.posts.length === 0)
        throw new Error("Something Went Wrong");
      console.log("Api Response", data);
        setposts(data.posts);
        setpage(data.page);
        settotalpages(data.totalPages);
        
        
    }
    catch(error){
        console.error("Error in api response");
        setposts([]);
        setpage(1);
        settotalpages(null);
    }
    setloading(false);
}
async function handlepagechange(page){
    navigate({search:`?page=${page}`})
    setpage(page);
}
const value={
    posts,
    setposts,
    loading,
    setloading,
    page,
    setpage,
    totalPages,
    settotalpages,
    fetchBlogPosts,
    handlepagechange
}
return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextProvider;