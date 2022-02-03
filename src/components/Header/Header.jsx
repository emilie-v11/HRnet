import React from 'react';
import Nav from './Nav/Nav';
import './Header.css';
import logo from '../../assets/img/logo.webp';

const Header = () => {
    return (
        <header className="px-4 py-2">
            {/* <div className="container"> */}
            <div className="container-xxl d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <img className="logo" src={logo} alt="logo Wealth Health" width='6rem' height='5rem' />
                <h1 className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none">
                    HRnet
                </h1>
                <Nav />
            </div>
            {/* </div> */}
        </header>
    );
};

export default Header;
