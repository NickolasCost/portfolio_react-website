import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/dialogs">Dialogs</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/music">Music</a></li>
                <li><a href="/settings">Settings</a></li>
            </ul>
        </div>
    )
}

export default Navbar;