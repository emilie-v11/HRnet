import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center m-3">
            <small className="fst-italic fw-lighter">
                © {new Date().getFullYear()} Wealth Health Company, Inc. <br />
                All rights reserved.
            </small>
        </footer>
    );
};

export default Footer;
