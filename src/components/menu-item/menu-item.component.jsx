import React from 'react';
import './menu-item.styles.scss';
// withrouter is a higher order component
// function that gives you back a powered up component
import { withRouter } from 'react-router-dom';

// going to use a functional component since
// for now we're not going to add state

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick ={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);