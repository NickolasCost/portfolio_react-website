import React from 'react';
import styles from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={styles.dialogs_item + " " + styles.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={styles.messages_item}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                <DialogItem name="Андрей" id="1"/>
                <DialogItem name="Дима" id="2"/>
                <DialogItem name="Света" id="3"/>
                <DialogItem name="Оля" id="4"/>
            </div>
            <div className={styles.messages}>
                <Message message="Hellow!" />
                <Message message="How are you?" />
                <Message message="I'm fine" />
            </div>
        </div>
    )
}

export default Dialogs;

