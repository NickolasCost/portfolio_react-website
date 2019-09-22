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

    let dialogsData = [
        { id: 1, name: "Андрей" },
        { id: 2, name: "Дима" },
        { id: 3, name: "Лена" },
        { id: 4, name: "Оля" }
    ]
    let messagesData = [
        { id: 1, message: "Hellow!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "I'm fine" },
        { id: 4, message: "Good" }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={styles.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    )
}

export default Dialogs;

