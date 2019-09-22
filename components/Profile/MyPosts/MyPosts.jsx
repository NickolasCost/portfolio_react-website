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

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <br />
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post name={postsData[0].name} message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post name={postsData[1].name} message={postsData[1].message} likesCount={postsData[1].likesCount} />
                <Post name={postsData[2].name} message={postsData[2].message} likesCount={postsData[2].likesCount} />
            </div>
        </div>
    )
}

export default MyPosts;