import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({item}) => {
    const {isAuthenticated} = useContext(AuthContext);
    return isAuthenticated ? item : <Navigate to="#"/>
  
}

export default PrivateRoute
