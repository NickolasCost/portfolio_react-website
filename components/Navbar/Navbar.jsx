import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={styles.active}>Dialogs</NavLink></li>
                <li><NavLink to="/news" activeClassName={styles.active}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={styles.active}>Music</NavLink></li>
                <li><NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;