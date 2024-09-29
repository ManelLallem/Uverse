import React, { useState } from 'react';
import { context } from "../Context/Context";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'; 
import './logIn.css'
const SignUp = () => {
    const {data,setData} = useContext(context);
    const{account,setAccount}=useContext(context)
    let [fname,setFname]=useState("")
    let [lname,setLname]=useState("")
    let [username,setUsername]=useState("")
    let [password,setPassword]=useState("")
    const navigate=useNavigate()

    let handleSignUp=()=>{
        setData([...data,{ id:data.length +1, first_name:fname,last_name:lname,userName:username,password:password}])
        //setAccount([...account,{id:data.length+1,like1:false,like2:false,like3:false}])
        data?(console.log(data)):("")
        navigate('/')
    }
    return (
        <div id='SignUp'>
            <h2>Create your Uverse account</h2>
                <p>First Name</p>
                <input className='text-input' type="text" placeholder='Enter your First name' onChange={(e)=>setFname(e.target.value)} />
                <p>Last Name</p>
                <input className='text-input' type="text" placeholder='Enter your Last name' onChange={(e)=>setLname(e.target.value)}  />
                <p>UserName</p>
                <input className='text-input' type="text" placeholder='Enter your username ' onChange={(e)=>setUsername(e.target.value)} />
                <p>Password</p>
                <input className='text-input' type="password" placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} />
                <input className='btn' type="button" value="Sign Up " onClick={()=>handleSignUp()} />
                <p>You already have  an account? Log In <span className='here' onClick={()=>navigate('/')}>here</span></p>
            
        </div>
    );
};

export default SignUp;
