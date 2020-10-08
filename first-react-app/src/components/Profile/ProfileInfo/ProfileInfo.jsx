import React from 'react';
import css from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={css.mainContent}>
            <div className={css.profilePic}>
                <img alt="" src="https://astv.ru/content/Avatars/05/93/0593ef7c-4a91-4ee4-8c74-1762c0a0051e_2.jpg" />
            </div>
            <div>
                ava+decsription
            </div>
        </div>
    )
};

export { ProfileInfo };