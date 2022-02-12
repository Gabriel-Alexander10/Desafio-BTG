import React from 'react';
import PropTypes from 'prop-types';
import { IoMdClose  } from 'react-icons/io';
import './styles.css';

export const Modal = ({
    children,
    isOpen,
    setIsOpen
}) => {

    return (
        <>
            {isOpen ? (
                <div className="modal">
                    {children}

                    <button onClick={() => setIsOpen(false)}>
                        <IoMdClose color="#fff" size={24} />
                    </button>
                </div>
            ) : <></>}
        </>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    children: PropTypes.node
};