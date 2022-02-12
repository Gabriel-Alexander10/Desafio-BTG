/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/**
 * Header is an example component.
 */

export const Header = () => {

    return (
        <header className="header">
            <div className="logo">
                <strong>
                    Desafio BTG
                </strong>
                <span>By Gabriel Alexander</span>
            </div>
        </header>
    )
}

Header.propTypes = {
    id: PropTypes.string,
};