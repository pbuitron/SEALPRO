import React from "react";
import logoJpg from '../../images/logo.jpg'
import './Logo.css'


const Logo = () => {
    return (
        <img src={logoJpg} alt="Logo principal" className="logo"/>
    );
};

export default Logo;
