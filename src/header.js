import React from 'react';
import banner from './images/logo.jpg';
import './css/App.css'

const Header = () => {
    return (
        <div>
             <img src={banner} className="myLogo" alt="logo" />
        </div>
    );
}

export default Header;
