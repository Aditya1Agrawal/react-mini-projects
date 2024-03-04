import React from 'react'
import Template from '../components/Template'
import login from "../assets/login.png"

const Login = ({setisloggedin}) => {
  return (
    <Template
        title={"Welcome Back"}
        desc1={"Build skills for today,tommorrow,and beyond."}
        desc2={"Education to future-proof your career."}
        image={login}
        formtype={"login"}
        setisloggedin={setisloggedin}
    />
    
  )
}

export default Login