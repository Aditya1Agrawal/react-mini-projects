import React,{useState}from 'react';
import {Course} from "./Course.js";
export const Courses = ({courses,category}) => {
    const [likedCourses,setLikedCourses]=useState([]);
    function getCourses(){
        let allCourses=[];
        if(category==="All"){
            Object.values(courses).forEach((type)=>(
                type.forEach((course)=>(allCourses.push(course)))
            ));
            return allCourses;
        }
        else{
            return courses[category];
        }
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4 '>
    {
        getCourses().map((course)=>(
            <Course  key={course.id} course={course} setLikedCourses={setLikedCourses}
                likedCourses={likedCourses}
            />
        ))
    }
    </div>
  )
}
