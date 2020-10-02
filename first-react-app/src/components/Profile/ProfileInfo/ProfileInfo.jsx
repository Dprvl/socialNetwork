import React from 'react';
import css from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={css.mainContent}>
            {/* <div>
                <img src='https://www.restoclub.ru/uploads/place_thumbnail_big/f/5/7/d/f57d4e7a057a8ba55c088f91b7a09d95.jpg' />
            </div> */}
            <div className={css.profilePic}>
                <img src="https://astv.ru/content/Avatars/05/93/0593ef7c-4a91-4ee4-8c74-1762c0a0051e_2.jpg" />
            </div>
            <div>
                ava+decsription
            </div>
        </div>
    )
};

export { ProfileInfo };