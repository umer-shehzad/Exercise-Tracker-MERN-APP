import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateCom = () => {
    const auth = localStorage.getItem('user-login')
    return auth ? <Outlet /> : <Navigate to="Login" />
}
export default PrivateCom;
