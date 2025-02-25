import React, { useContext, useState } from 'react'
import '../styles/LoginPage.scss'
import AuthContext from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleLogin = async(e)=>{
      e.preventDefault();
      try{
        await login(username,password);
        navigate("/");
      }
      catch(error){
        alert("OOOppps Login Failed!!!");
        setUsername("");
        setPassword("");
      }
  
    }
  return (
    <div className='login-page'>
      <div className="login-page-head">
        <h3>FISHERMAN</h3>
        <h3>Balıkçılıktan</h3>
        <h3>Fazlası...</h3>
      </div>
      <form onSubmit={handleLogin}>
        <h3>LOGIN</h3>
        <input value={username} onChange={e=>setUsername(e.target.value)} type="text" placeholder='Username' />
        <input value={password} onChange={e=>setPassword(e.target.value)} type="text" placeholder='Password' />
        <input type="submit" value="Login" />
        <Link to="/" className='link'>Giriş Yapmadan Devam Et.</Link>
      </form>
    </div>
  )
}

export default LoginPage
