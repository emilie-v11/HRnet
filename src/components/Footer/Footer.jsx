import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="text-center p-3">
            <small className="fst-italic fw-lighter text-light">
                © {new Date().getFullYear()} Wealth Health Company, Inc. <br />
                All rights reserved.
            </small>
        </footer>
    );
};

export default Footer;
