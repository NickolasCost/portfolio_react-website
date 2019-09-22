import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <br />
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post name='Андрей' message="What's up?!" likesCount="0" />
                <Post name='Дима' message="It's cool" likesCount="3" />
                <Post name='Андрей' message="Awesome" likesCount="2" />
            </div>
        </div>
    )
}

export default MyPosts;