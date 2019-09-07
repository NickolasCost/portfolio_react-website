import React from 'react';
import styles from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg" alt="avatar"/>
            <span className={styles.name}>My name</span>
            <p className={styles.post}></p>
        </div>
    )
}

export default MyPosts;