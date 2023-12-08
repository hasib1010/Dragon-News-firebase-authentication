
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

const Main = () => {
    return (
        <>
            
            <Outlet /> 
        </>
    );
};

export default Main;
