import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center">
            <small className="fst-italic fw-lighter">
                © {new Date().getFullYear()} Wealth Health Company, Inc. All rights reserved.
            </small>
        </footer>
    );
};

export default Footer;
