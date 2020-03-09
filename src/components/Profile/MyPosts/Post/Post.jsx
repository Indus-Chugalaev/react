import React from 'react';
import s from './Post.css';

const Post = (props) => {
    return (
        <div className={s.item}>{props.message}</div>

);
}

export default Post;