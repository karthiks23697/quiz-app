import React from 'react';
import { useHistory } from "react-router-dom";
import './RegistrationPage.css';

function Registration() {
    const history = useHistory();
    const redirectToLogin = () => {
        const path = 'login';
        history.push(path)
    }
    return(
        <div className="card col-12 col-lg-4 login-card">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">User Name</label>
                    <input type="text" 
                        className="form-control" 
                        id="userName" 
                        placeholder="Add User Name"
                        value=""
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={redirectToLogin}>Login here</span> 
            </div>
            
        </div>
    )
}

export default Registration;