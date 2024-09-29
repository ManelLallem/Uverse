import React, { useContext } from 'react';
import './logIn.css'
import { useState, } from 'react';
import { context } from '../Context/Context';
import { useNavigate } from 'react-router-dom'; 
function Login(props) {
  let [username,setUsername]=useState("")
  let [password,setPassword]=useState("")
  const {data,setData} = useContext(context);
  const {account,setAccout} = useContext(context);
  const{id,setId}=useContext(context)
  const navigate = useNavigate();

  let handleLogin=()=>{
    for(let i=0;i<data.length;i++){
        if(username==data[i].userName && password==data[i].password){
               setId(data[i].id);
               navigate('/Home')
               break;
        }
    }
  }
    return (
        <div id='Login'>
            <section id='welcome'>
                <h1>Welcome to Uverse</h1>
                <p className='text'>Log In to your account to watch your favourite videos</p>
                <p className='text'> Or create a new account <span className='here' onClick={()=>navigate('/SignUp')}>here</span></p>
            </section>
            <section id='log'>
                <p id='log-into'>Log into Uverse</p>
                <input className='text-input' type="text" placeholder='User name' onChange={(e)=>setUsername(e.target.value)}/>
                <input className='text-input' type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
                <input className='btn' type="button" value="Log in" onClick={()=>handleLogin()} />
                <p>You don't have an account? Create one <span className='here' onClick={()=>navigate('/SignUp')}>here</span></p>
            </section>
        </div>
    );
}

export default Login;