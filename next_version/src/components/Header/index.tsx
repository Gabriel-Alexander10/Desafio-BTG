import React from 'react';
import styles from "./styles.module.css";

export const Header = () => {

    return (
        <header className={styles.header}>

            <div className={styles.logo}>
                <strong>
                    Desafio BTG
                </strong>
                <span>By Gabriel Alexander</span>
            </div>
            
            <div className={styles.decoration}>

            </div>
        </header>
    )
}