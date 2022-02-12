import React from 'react';
import { IoMdClose  } from 'react-icons/io';
import styles from './styles.module.css';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({
    children,
    isOpen,
    setIsOpen
}) => {

    return (
        <>
            {isOpen ? (
                <div className={styles.modal}>
                    {children}

                    <button onClick={() => setIsOpen(false)}>
                        <IoMdClose color="#fff" size={24} />
                    </button>
                </div>
            ) : <></>}
        </>
    )
}