import React from 'react';
import moment from 'moment';

const Header = () => {
    return (
        
        <div className='font-popins flex flex-col gap-3 justify-center items-center mt-2'>
           <img src="resourse/logo.png" alt="" />
           <p className='font-light text-xl text-[#706F6F]'>Journalism Without Fear or Favour</p>
           <p>{ moment().format("dddd, LL")}</p>
        </div>
    );
};

export default Header;
