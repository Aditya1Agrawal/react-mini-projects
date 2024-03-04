import React from 'react'
import logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';
import {toast} from 'react-hot-toast';
const Navbar = ({setisloggedin,isloggedin}) => {
    function logouthandler(){
        setisloggedin(false);
        toast.success("Logged Out");
    }
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
            <img src={logo}/>
        </Link>
        <nav >
            <ul className='flex text-white gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
        <div className='flex items-center gap-x-4'>
                {!isloggedin && 
                    <Link to="/login">
                    <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px]
                    border border-richblack-700">Login</button>
                    </Link>
                    
                }
                {!isloggedin && 
                    <Link to="/signup">
                    <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px]
                    border border-richblack-700">Signup</button>
                    </Link>
                }
                {isloggedin && 
                    <Link to="/">
                    <button onClick={logouthandler} className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px]
                    border border-richblack-700">LogOut</button>
                    </Link>
                }
                {isloggedin && 
                    <Link to="/dashboard">
                    <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px]
                    border border-richblack-700">Dashboard</button>
                    </Link>
                }
            </div>
    </div>
  )
}

export default Navbar