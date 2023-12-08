import React from 'react';
import LeftSideNav from '../components/home/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../components/home/Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import Navbar from '../layouts/Navbar';
import News from '../layouts/News';
import Header from '../layouts/Header';

const Home = () => {
    return (
        <div className='font-popins '>
            <Header></Header>
            <Navbar></Navbar>
            <BreakingNews></BreakingNews>
            
            <div className=' grid gap-11 lg:grid-cols-4 text-center mt-7'>
                <div><LeftSideNav></LeftSideNav></div>
                <div className='col-span-2'> <News></News></div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;
