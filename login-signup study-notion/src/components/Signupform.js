import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Signupform = ({setisloggedin}) => {
    const [formData,setformData]=useState({firstName:"",lastName:"",email:"",
password:"",confirmpassword:""});
    const [accountType,setaccountType]=useState("Student");
    const [showpassword,setshowpassword]=useState(false);
    const[showconfirmpassword,setshowconfirmpassword]=useState(false);
    const navigate =useNavigate();
    function onChangehandler(event){
        setformData((prev)=>(
            {...prev,[event.target.name]:event.target.value}
        ))
    }
    function onSubmitHandler(event){
        event.preventDefault();
        if(formData.confirmpassword!=formData.password){
            toast.error("Password do not match");
            return;
        }
       const finalData={
        ...formData,accountType
       }
        console.log(finalData);
        toast.success("Account Created");
        setisloggedin("true");
        navigate("/dashboard");

    }
  return (
    <div >
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${accountType==="Student"?"bg-richblack-900 text-richblack-5":
            "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setaccountType("Student")}>Student</button>
            <button  className={`${accountType==="Instructor"?"bg-richblack-900 text-richblack-5":
            "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setaccountType("Instructor")}>Instructor</button>
        </div>
        <form onSubmit={onSubmitHandler}>
        <div className='flex gap-x-4 mt-[20px]'>
        <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name
                 <sup className='text-pink-200'>*</sup></p>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={onChangehandler}
                    placeholder='Enter firstname'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                    p-[12px]'
                />
            </label>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={onChangehandler}
                    placeholder='Enter lastname'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                    p-[12px]'
                />
            </label>
        </div>
           
        <div className='mt-[20px]'>
        <label className='w-full '>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onChangehandler}
                    placeholder='Enter Email Address'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                    p-[12px]'
                />
            </label>
        </div>
           
            <div className='w-full flex gap-x-4 mt-[20px]'>
            <label className='relative w-full' >
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                <input
                    type={showpassword?("text"):("password")}
                    name="password"
                    value={formData.password}
                    onChange={onChangehandler}
                    placeholder='Enter password'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                    p-[12px]'
                />
                <span onClick={()=>(setshowpassword(!showpassword))} className='absolute right-3 
                top-[38px] cursor-pointer'>
                    {showpassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                    }
                </span>
            </label>
            <label className='relative w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                <input
                    type={showconfirmpassword?("text"):("password")}
                    name="confirmpassword"
                    value={formData.confirmpassword}
                    onChange={onChangehandler}
                    placeholder='Confirm Password'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full
                    p-[12px]'
                />
                <span onClick={()=>(setshowconfirmpassword(!showconfirmpassword))}
                className='absolute right-3 
                top-[38px] cursor-pointer' >
                    {showconfirmpassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                     } </span>
            </label>
            </div>
            <button className='w-full bg-yellow-50 rounded-[8px] font-medium
            text-richblack-900 px-[12px] py-[8px] mt-6'>Create Account</button>
        </form>
    </div>
  )
}

export default Signupform