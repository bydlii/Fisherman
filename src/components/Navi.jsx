import React, { useContext, useEffect, useState } from 'react'
import '../assets/styles/Navi.scss'
import 'primeicons/primeicons.css';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import axios from 'axios';

const Navi = () => {
  const {logout, isAuthenticated} = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentUser,setCurrentUser] = useState("");

  const handleLogin = ()=>{navigate("login")}
  const handleLogout = ()=>{
    logout();
    setCurrentUser("");
    navigate("login");
  }

  const getCurrentUser = async()=>{
    const url = "https://api.escuelajs.co/api/v1/auth/profile";
    const response = await axios.get(url,{
      headers:{
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken")).access_token}`
      }
    })
    const user = response.data;
    console.log("currentUser:",user);
    setCurrentUser(user);
  }
  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("userToken")))
    getCurrentUser();
  },[isAuthenticated])


  return (
    <>
    <nav>
      <ul>
        {/* <li><img src={fisher} alt="fisher"/></li> */}
        <li><h2>Fisherman</h2></li>
        <li><NavLink to="main">AnaSayfa</NavLink></li>
        <li><NavLink to="aboutUs">Hakkımızda</NavLink></li>
        <li><NavLink to="contact">İletişim</NavLink></li>
      </ul>
      <ul>
      <div className="user">
          {
            currentUser &&
              <div className="user-card">
                <img src={currentUser.avatar} alt="avatar" />
                <div className="user-card-text">
                  <span>{currentUser.name + " / " + currentUser.role}</span>
                </div>
              </div>
          }
            <li><NavLink to="/login" onClick={isAuthenticated?handleLogout:handleLogin} className='giris' href="#"><span className='pi pi-sign-in'></span>{isAuthenticated?"Çıkış Yap":"Giriş Yap"}</NavLink></li>
        </div>
      
        
      </ul>
    </nav>
    </>
  )
}

export default Navi
