import React from 'react';
import './menu-item.styles.scss';

// going to use a functional component since
// for now we're not going to add state

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div style={{
                backgroundImage: `url(${imageUrl})`
            }} className='background-image'
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;