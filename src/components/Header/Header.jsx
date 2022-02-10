import React from 'react';
import Nav from './Nav/Nav';
import './Header.css';
import logo from '../../assets/img/logo.webp';

const Header = () => {
    return (
        <header className="px-4 py-2 position-relative">
            <div className="container-xxl d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <h1 className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none">
                    <img
                        className="logo"
                        src={logo}
                        alt="logo Wealth Health"
                        width="6rem"
                        height="5rem"
                    />
                    HRnet
                </h1>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
