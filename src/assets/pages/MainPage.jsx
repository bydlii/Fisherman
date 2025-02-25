import React from 'react'
import SearchBar from '../../components/SearchBar'
import CardList from '../../components/CardList'
import { ToastContainer } from 'react-toastify'
import Slider from '../../components/Slider'
import { Outlet } from 'react-router-dom'



const MainPage = () => {
  return (
    <>
      <Slider/>
      <Outlet/>
      <SearchBar/>
      <CardList/>   
      <ToastContainer/>
      
    </>
  )
}

export default MainPage
