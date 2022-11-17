import React, { useEffect, useState } from 'react'
import "../components/login.css"
import Admin from "../components/Admin"
import User from "../components/User";
import { useNavigate } from "react-router-dom";
import image from "../images/loginback.jpg"




const Login = () => {


   const navigate = useNavigate();
  
   

  return (
    <div id="nav">
      

      <div id="login" className='centerbutton'>
        
       
<button onClick={()=>{navigate("/admin")}}> <i class="fa fa-user" aria-hidden="true"></i>ADMIN</button>

<button onClick={()=>{navigate("/user")}}><i class="fa fa-user" aria-hidden="true"></i>USER</button> 
       
      </div>
      
    </div>

    
  );
}

export default Login