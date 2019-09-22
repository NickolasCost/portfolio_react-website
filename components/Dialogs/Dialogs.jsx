import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                <div className={styles.dialogs_item + " " + styles.active}>
                    <NavLink to='/dialogs/1'>Андрей</NavLink>
                </div>
                <div className={styles.dialogs_item}>
                    <NavLink to='/dialogs/2'>Дима</NavLink>
                </div>
                <div className={styles.dialogs_item}>
                    <NavLink to='/dialogs/3'>Света</NavLink>
                </div>
                <div className={styles.dialogs_item}>
                    <NavLink to='/dialogs/4'>Оля</NavLink>
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.messages_item}>Hellow</div>
                <div className={styles.messages_item}>How are you?</div>
                <div className={styles.messages_item}>I'm fine</div>
            </div>
        </div>
    )
}

export default Dialogs;

