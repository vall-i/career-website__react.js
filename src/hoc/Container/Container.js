import React from 'react';

import './Container.scss';

const container = props => {
    return (
        <div className='Container'>{props.children}</div> 
    );
};


export default container;