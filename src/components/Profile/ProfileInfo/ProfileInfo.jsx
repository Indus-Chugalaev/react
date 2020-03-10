import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.content}>
        <div><img src='https://www.bluebirdind.com/wp-content/uploads/2019/02/SERH-50B_1440.jpg'/></div>
        <div className="descriptionBlock">ava + description</div>

    </div>
    );
}

export default ProfileInfo;