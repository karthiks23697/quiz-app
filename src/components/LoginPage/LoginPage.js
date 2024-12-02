import React  from 'react';
import { useHistory } from "react-router-dom";
import './LoginPage.css';

function Login() {
    const history = useHistory();
    const redirectToRegister = () => {
        const path = 'register';
        history.push(path)
    }
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
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
                       value=""
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >Login</button>
            </form>
            <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" onClick={redirectToRegister}>Register</span> 
            </div>
        </div>
    )
}

export default Login;