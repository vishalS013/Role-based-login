import React from 'react'
import {Outlet, Navigate} from "react-router-dom"
import { useAuth } from './authContext'

const PrivateRoute = ({requiredRole}) => {
    const {userRole}= useAuth();
    if(userRole !== requiredRole){
        return  <Navigate to="/" replace/>

    }
    if(!userRole){
      return <Navigate to='/register' replace/>
    }

  return (
   <Outlet/>
  )
}

export default PrivateRoute