import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav/Nav';
// import logo from '../../assets/img/logo.webp';
import './Header.css';

const Header = () => {
    return (
        <header className="px-4 py-3 position-relative">
            <div className="container-xxl d-flex flex-wrap align-items-center justify-content-center justify-content-around justify-content-lg-start">
                <NavLink
                    className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none"
                    to="/"
                >
                    <img
                        className="logo"
                        // src={logo}
                        src="https://user.oc-static.com/upload/2020/08/14/15974125765772_image2.jpg"
                        alt="logo Wealth Health"
                        width="6rem"
                        height="5rem"
                    />
                    <h1 className="">HRnet</h1>
                </NavLink>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
