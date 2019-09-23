import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsData = [
        { id: 1, message: "What's up?!", likesCount: 0, name: "Андрей" },
        { id: 2, message: "It's cool", likesCount: 3, name: "Дима" },
        { id: 3, message: "Awesome", likesCount: 2, name: "Андрей" },
        { id: 4, message: "Good", likesCount: 4, name: "Дима" }
    ]

    let postsElements = postsData
        .map( post => <Post name={post.name} message={post.message} likesCount={post.likesCount} /> )

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <br />
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;