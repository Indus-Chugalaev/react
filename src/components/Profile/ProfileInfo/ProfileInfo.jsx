import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
        <div><img src='https://www.bluebirdind.com/wp-content/uploads/2019/02/SERH-50B_1440.jpg'/></div>
        <div>ava + description</div>
            <div>
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div><div className={s.posts}>
                <MyPosts/>

            </div>
            </div>
    </div>
    );
}

export default Profile;