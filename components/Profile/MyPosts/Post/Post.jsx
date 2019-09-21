import React from 'react';
import styles from './Post.module.css'


const Post = () => {
    return (
        <div>
            <div className={styles.container}>
                <img className={styles.img} src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg" alt="avatar" />
                <span className={styles.name}>My name</span>
                <p className={styles.post}>My post</p>
                <p>Likes <span>2</span></p>
            </div>
        </div>
    )
}

export default Post;