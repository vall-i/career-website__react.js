import React from 'react';

import './ScrollUp.scss';

const scrollUp = props => {
  return (
    <div className='scroll-up' onClick={props.clicked}>
      <span>
        <i class='fas fa-chevron-up'></i>
      </span>
    </div>
  );
};

export default scrollUp;
