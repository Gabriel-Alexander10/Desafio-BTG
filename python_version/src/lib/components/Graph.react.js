import React from "react";
import PropTypes from 'prop-types';
import { Modal } from './Modal';
import { Resizable } from './Resizable';

const Graph = ({
    id,
    children,
    width,
    isOpen,
    setProps
}) => {

    function setIsOpen(value) {
        setProps({ isOpen: value });
    }

    console.log("modal", isOpen)

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Resizable id={id} setGraphWidth={setProps} width={width}>
                {children}
            </Resizable>
        </Modal>
    )
}

Graph.propTypes = {
    id: PropTypes.string,
    children:  PropTypes.node,
    width: PropTypes.number,
    isOpen: PropTypes.bool,
    setProps:  PropTypes.func
}

export default Graph;