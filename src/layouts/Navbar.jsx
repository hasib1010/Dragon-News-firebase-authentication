import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
    const navLinks = <>
    <Link to={'/'} className='text-xl font-normal'> <li><a>Home</a></li> </Link>
    <Link className='text-xl font-normal'> <li><a>About</a></li> </Link>
    <Link className='text-xl font-normal'> <li><a>Career</a></li> </Link>
    </>
    return (
        <div className="navbar bg-base-100 container mx-auto">
   <div className='navbar-start'></div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {navLinks}
    </ul>
  </div>
  <div className="navbar-end flex gap-5">
    <img className='w-11 h-11 first-letter:' src="resourse/user.png" alt="" />
      {
        user?
        <Link className='btn' onClick={logOut}>Sign Out</Link> : 
        <Link to={'/login'}><a className="btn bg-black text-white">Log In</a></Link>
  
      }
   </div>
</div>
    );
};

export default Navbar;