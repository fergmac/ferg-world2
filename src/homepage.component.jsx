import React from 'react';

import './homepage.styles.scss';

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Albums</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Merchandise</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Tabs</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Photos</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Drawings</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;