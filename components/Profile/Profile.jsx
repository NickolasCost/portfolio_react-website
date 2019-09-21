import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div>
        <div className={styles.container}>
            <img src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg" alt="avatar"/>
            <p className={styles.description}>Description</p>
        </div>
        <MyPosts />
        </div>

    )
}

export default Profile;