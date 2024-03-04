import React,{useState,useEffect} from "react";
import {filterData,apiUrl} from "./data.js";
import {toast} from "react-toastify";
import {Spinner} from "./components/Spinner.js";
import {Navbar} from "./components/Navbar.js";
import {Filter} from "./components/Filter.js";
import {Courses} from "./components/Courses.js";
const App = () => {
  const [loading,setLoading]=useState(true);
  const [courses,setCourses]=useState(null);
  const [category,setCategory]=useState(filterData[0].title);
  async function fetchData(){
    setLoading(true);
    try{
      let response =await fetch(apiUrl);
     let output = await response.json();
     setCourses(output.data);
    }
    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }
  useEffect(
    ()=>{
      fetchData();
    },[])
  return (<div className="min-h-screen flex flex-col bg-bgDark2">
    <div> <Navbar/></div>
    <div>
    <Filter filterdata={filterData} setCategory={setCategory} category={category}/>
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center
    items-center min-h-[50vh] ">
    {loading?<Spinner/>:<Courses courses={courses} category={category}/>}
    </div>
    </div>
  </div>);
};

export default App;
