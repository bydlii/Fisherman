import React from 'react'
import '../assets/styles/Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="ust">
      <a href="http://www.facebook.com" target="_blank"><span className='pi pi-facebook'></span></a>
      <a href="http://www.instagram.com" target="_blank"><span className='pi pi-instagram'></span></a> 
      <a href="http://www.x.com" target="_blank"><span className='pi pi-twitter'></span></a>
      <a href="http://www.github.com" target="_blank"><span className='pi pi-github'></span></a>
      <a href="http://www.linkedin.com" target="_blank"><span className='pi pi-linkedin'></span></a>      
      </div>
      
      <div className="alt">
       <p className='alt-yazi'> Development by Doğukan Beydili <br /> © 2024 All rights reserved. </p>
      </div>
    
    </div>
  )
}

export default Footer
