import React, { useEffect } from 'react'
import '../styles/Loader.scss'
import { useNavigate } from 'react-router-dom'
const LoadingPage = () => {
    const navigate = useNavigate();
    useEffect(() => {

        setTimeout(() => {
            navigate("main");
        }, 2500);
    })
  return (
    <div className='loader'>
      
    </div>
  )
}

export default LoadingPage
