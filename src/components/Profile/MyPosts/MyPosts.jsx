import React from 'react';
import s from './MyPosts.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    return (
        <div className={s.posts}>
            <Post message="Hi? how are you?"/>
            <Post message="Hello" />
            </div>

    );
}

export default MyPosts;