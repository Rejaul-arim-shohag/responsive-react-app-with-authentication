import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {signinUsingGoogle} = useAuth()
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={signinUsingGoogle} className="btn btn-primary">Sign in with google</button>
        </div>
    );
};

export default Login;