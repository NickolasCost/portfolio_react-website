import React from 'react';
import styles from './Post.module.css'


const Post = (props) => {
    return (
        <div>
            <div className={styles.container}>
                <img className={styles.img} src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg" alt="avatar" />
                <span className={styles.name}>{props.name}</span>
                <p className={styles.post}>{props.message}</p>
                <p>Likes <span>{props.likesCount}</span></p>
            </div>
        </div>
    )
}

export default Post;