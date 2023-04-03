import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/authContext/AuthContext';
import './Login.css'
import { login } from '../../../context/authContext/apiCalls';
export default function Login(){
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const {isFetching, dispatch}=useContext(AuthContext)
    const handleClick=(e)=>{
e.preventDefault();
//Api calls. user is defined here(email and password)
//dispatch got from AuthContext, via useContext
login({email, password}, dispatch)
    }
return (
    <div className="login">
<form className="loginForm">
<input type="text"
 placeholder="email"
  className="loginInput"
  //when we write on input, update email
    onChange={(e)=>setEmail(e.target.value)}
  />
  
<input type="password"
 placeholder="password"
  className="loginInput"
  //when we write on input, update password
    onChange={(e)=>setPassword(e.target.value)}
  />
<button className="loginButton"
onClick={handleClick}
disabled={isFetching}
>
Login
</button>

</form>
    </div>
)
}