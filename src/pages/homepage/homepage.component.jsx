import React from 'react';
import  { HomePageContainer } from './homepage.styles.jsx';

import Directory from '../../components/directory/directory.components';

const Homepage = () => {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    );
}

export default Homepage;