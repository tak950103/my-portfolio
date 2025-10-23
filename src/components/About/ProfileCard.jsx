import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
    return (
        <header className='profile-card' aria-label='About me'>
            <div className='container'>
                <div className='profile-hero'>
                    <div className='ring' area-hidden="true" />
                    <img className='profile-img' src={`${import.meta.env.BASE_URL}/images/profile-icon.png`} />
                    <div className='name-block'>
                        <h1 className='profile-name'>玉置 伎</h1>
                        <p className='profile-name2'>Takumi Tamaki</p>
                        <p className='profile-title'>ソフトウェアエンジニア</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ProfileCard;