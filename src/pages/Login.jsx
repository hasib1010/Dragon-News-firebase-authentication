import React from 'react';
import Navbar from '../layouts/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';

const Login = () => {
        const {signIn} = useContext(AuthContext);
        const location = useLocation();
        // console.log(location);
        const navigate = useNavigate()
        const handleLogin=(e)=>{
            e.preventDefault();
            const email=e.target.email.value;
            const password = e.target.password.value; 
            
            signIn(email, password)
            .then(res => {
            //   console.log(res.user);
              console.log(location);
              {
                navigate(location?.state? location.state : "/")
              }
            })
            .catch(error => {
              console.error("Sign-in failed:", error);
            });
            
        }

    return (
        <div>
            <Navbar></Navbar>

            <form onSubmit={handleLogin} className="w-2/4  mx-auto ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Don't have an account? please <Link className='text-red-600' to={'/register'}>Register</Link></p>
                        </form>
        </div>
    );
};

export default Login;