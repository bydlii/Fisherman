import './assets/styles/App.scss';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './assets/pages/MainPage';
import AboutUsPage from './assets/pages/AboutUsPage';
import ContactPage from './assets/pages/ContactPage';
import ProfilePage from './assets/pages/ProfilePage';
import BasketPage from './assets/pages/BasketPage';
import ProductsPage from './assets/pages/ProductsPage';
import ProductDetail from './assets/pages/detailPages/ProductDetail';
import LoadingPage from './assets/pages/LoadingPage';
import LayoutPage from './assets/pages/layouts/LayoutPage';
import LoginPage from './assets/pages/LoginPage';
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './services/PrivateRoute';
import Form from './components/Form';





const App = () => {
  return (
  <AuthProvider>    
    <BrowserRouter> 
    
      <Routes>         
       
      <Route path='' element={<LoadingPage/>}/>
      
        <Route path='/' element={<LayoutPage/>}>

          <Route path='main' element={<MainPage/>}>
            <Route path='/main' element={<PrivateRoute item={<Form/>}/>}/>
          </Route>
      
          <Route path='aboutUs' element={<AboutUsPage/>}/> 
          <Route path='contact' element={<ContactPage/>}/> 
          <Route path='basket' element={<BasketPage/>}/> 
          <Route path='profile' element={<ProfilePage/>}/> 
          <Route path='products' element={<ProductsPage/>}/>
          <Route path='main/:ProductID' element={<ProductDetail/>}/>
          
          </Route>
        
          <Route path='login' element={<LoginPage/>}/>   
        
      </Routes>          
    </BrowserRouter>
  </AuthProvider>
  )
}

export default App
