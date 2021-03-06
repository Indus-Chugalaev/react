import React from 'react';
import s from './MyPosts.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

      let postsElements = props.posts.map(p => <Post message={p.message}/>);

    return (
        <div className="postsBlock">
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}

export default MyPosts;