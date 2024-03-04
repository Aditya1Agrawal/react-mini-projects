import { Routes,Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isloggedin,setisloggedin]=useState(false);
  return (
  <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">
  <Navbar  setisloggedin={setisloggedin} isloggedin={isloggedin}/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login setisloggedin={setisloggedin}/>}/>
    <Route path="/signup" element={<Signup setisloggedin={setisloggedin}/>}/>
    <Route path="/dashboard" element={
      <PrivateRoute isloggedin={isloggedin}>
        <Dashboard/>
      </PrivateRoute>

    }/>
  </Routes>
  
  </div>)
}

export default App;
