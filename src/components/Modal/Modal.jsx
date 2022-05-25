import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ onClick, message }) => {
    return (
        <div className="overlay">
            <div className="modal-bg">
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={onClick}
                ></button>
                <div className="modal-text">
                    <p className="m-0">{message}</p>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    message: PropTypes.string.isRequired,
    onclick: PropTypes.func,
};

export default Modal;
