import { useContext } from "react";
import Navbar from "../layouts/Navbar";
import { Link } from 'react-router-dom';
import { AuthContext } from "../Provider/Provider";



const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        // const email=e.target.email.value;
        // const password = e.target.password.value;
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get('password')
        const name = form.get('name')
        const photo = form.get('photo')
        createUser(email, password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(error=>{
            console.log(error);
        })
        console.log(email, password, name, photo);
    }
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleRegister} className="w-2/4  mx-auto ">
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

                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />

                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input name='photo' type="text" placeholder="Your photo url  " className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
                <p>Already have an account? please <Link className='text-red-600' to={'/login'}>Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;