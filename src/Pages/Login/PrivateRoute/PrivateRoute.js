import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();
    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }
    return (
        user.email ? children : <Navigate to="/login"  state={{ from: location }} replace />
    );
};

export default PrivateRoute;