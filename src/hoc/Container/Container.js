import React from 'react';

import './Container.scss';

const container = props => {
    return (
        <div className='container'>{props.children}</div> 
    );
};


export default container;