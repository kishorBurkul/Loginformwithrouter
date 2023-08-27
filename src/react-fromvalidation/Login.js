import React, { useEffect, useState } from 'react'
import './Login.css';
import { Outlet, json } from "react-router-dom";
import Header from '../Header';

function Login() {


    const initialValue ={
        username:"",
        email:"",
        password:""

    }


  const [initialdata , setInitialData ] =useState(initialValue);
  const [formErrors , setFOrmerror] = useState({})
  const [isSubmit , setIssubmit] = useState(false)

   function handleChange(e){

   const {name , value} =  e.target;
   setInitialData({...initialdata , [name]:value})
   //[name] use as key for value 

   console.log(initialdata);
   };

   function handleSubmit(e){
     e.preventDefault();
     console.log( "form data" ,initialdata)
     setFOrmerror(validate(initialdata));
     setIssubmit(true)
     setInitialData(initialValue);

   }

    useEffect(()=>{
        console.log(formErrors)
      if(Object.keys(formErrors).length === 0 && isSubmit){
         console.log(initialdata)
      }

    },[formErrors])


   const validate = (values) =>{
      const error ={};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.username){
        error.username ="Username is required";
      }
      if(!values.email){
        error.email ="email is required";
      } else if(!regex.test(values.email)){
           error.email ="This is not valid email format "
      }
      if(!values.password){
        error.password ="password is required";
      } else if(values.password.length < 4){
        error.password ="Password Character must be greter than 4";
      } else if (values.password.length > 10){
        error.password =" Password Character must br less than 10";
      }
      
      return error
   }

  return (
    <>
    <Header/>
    <div 
    className="login-box">
        {Object.keys(formErrors).length === 0 && isSubmit ? (alert("Sign successfully"))
        :(<pre style={{color:"white"}}>{JSON.stringify(initialdata , undefined , 2)}</pre>)}
        
  <h2>Login /SignUp</h2>
  <form onSubmit={handleSubmit}>
    <div 
    className="user-box">
      <input type="text" name="username" placeholder='Enter Valid Username' value={initialdata.username} onChange={handleChange} />
      <label>Username</label>
    </div>
    <p style={{color:"red"}}>{formErrors.username}</p>
    <div 
    className="user-box">
      <input type="email" name="email" placeholder='Enter Valid Email '  value={initialdata.email} onChange={handleChange}/>
      <label>Email</label>
    </div>
    <p style={{color:"red"}}>{formErrors.email}</p>
    <div 
    className="user-box">
      <input type="password" name="password" placeholder='Enter Valid Password '  value={initialdata.password} onChange={handleChange}/>
      <label>Password</label>
    </div>
    <p style={{color:"red"}}>{formErrors.password}</p>
    <button>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </button>
  </form>
</div>
<Outlet/>
</>
  )
}

export default Login