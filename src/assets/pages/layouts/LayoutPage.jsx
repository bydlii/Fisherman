import React from 'react'
import Navi from '../../../components/Navi'
import Footer from '../../../components/Footer'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
      <Navi/>
    <div>
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default layout
