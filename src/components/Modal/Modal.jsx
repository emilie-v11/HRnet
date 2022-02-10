import React from 'react';
import './Modal.css';

const Modal = ({ onClick }) => {
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
                    <p className="m-0"> New employee created !</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
