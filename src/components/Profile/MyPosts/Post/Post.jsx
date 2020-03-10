import React from 'react';
import s from './Post.css';

const Post = (props) => {
    return (
        <div className={s.post}><img src="https://im0-tub-ru.yandex.net/i?id=d8653e8e388f6731e5cc8a5bd9bde06b&n=13" />{props.message}</div>

);
}

export default Post;