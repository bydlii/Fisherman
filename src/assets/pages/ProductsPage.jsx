import React from 'react'
import SearchBar from '../../components/SearchBar'
import CardList from '../../components/CardList'
import { ToastContainer } from 'react-toastify'

const ProductsPage = () => {
  return (
    <>
      <SearchBar/>
      <CardList/>   
      <ToastContainer/>
    </>
  )
}

export default ProductsPage
