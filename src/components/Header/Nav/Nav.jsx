import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-dark fw-bold fs-5">
            <li>
                <NavLink
                    className={navData =>
                        navData.isActive ? 'active nav-link' : 'nav-link'
                    }
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={navData => (navData.isActive ? 'active nav-link' : 'nav-link')}
                    to="/employee-list"
                >
                    Current Employees
                </NavLink>
            </li>
        </ul>
    );
};

export default Nav;
