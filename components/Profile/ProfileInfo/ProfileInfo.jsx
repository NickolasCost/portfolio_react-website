import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={styles.container}>
            <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg" alt="avatar" />
            <p className={styles.description}>Description</p>
        </div>
    )
}

export default ProfileInfo;