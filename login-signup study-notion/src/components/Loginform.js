import React ,{useState} from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate,Link } from 'react-router-dom';

const Loginform = ({setisloggedin}) => {
    const navigate =useNavigate();
    const [formData,setformData]=useState({email:"",password:""});
    const [showpassword,setshowpassword]=useState(false);
    function onchangehandler(event){
        setformData((prev)=>(
            {...prev,[event.target.name]:event.target.value}
        ))
    }
    function onSubmithandler(event){
        event.preventDefault();
        console.log(formData);
        setisloggedin(true);
        toast.success("Logged In")
        navigate("/dashboard");
    }
  return (
    <div>
        <form  onSubmit={onSubmithandler} className='w-full flex flex-col gap-y-4
        mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email address<sup className='text-pink-200'>*</sup></p>
                <input
                    type="email"
                    name="email"
                    onChange={onchangehandler}
                    value={formData.email}
                    placeholder='Enter email address'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
            <label className='relative w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password
                <sup className='text-pink-200'>*</sup></p>
                <div>
                <input
                    type={showpassword?"text":"password"}
                    name="password"
                    onChange={onchangehandler}
                    value={formData.password}
                    placeholder='Enter password'
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
                <span onClick={()=>setshowpassword(!showpassword)} className='absolute right-3 top-[38px]
                cursor-pointer'>{showpassword?<AiOutlineEyeInvisible fontSize={24}
                    fill='#AFB2BF'
                />:<AiOutlineEye fontSize={24} fill='#AFB2BF'/>}</span>
                </div>
            </label>
            <Link to="#">
             <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>forget password</p>   
            </Link>
            <button className='w-full bg-yellow-50 rounded-[8px] font-medium
            text-richblack-900 px-[12px] py-[8px] mt-6' >SignIn</button>
        </form>
    </div>
  )
}

export default Loginform