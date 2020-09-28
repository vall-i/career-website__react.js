import React from 'react';
import moment from 'moment';

import './Social.scss';

const currentDate = moment().format('DD.MM.YY');
const social = () => {
  return (
    <div className='social'>
      <span>{currentDate}</span>
      <div className='social__wrap'>
        <a href='#'>
          <span className='social__box social__box--color1'>
            <i className='fas fa-link'></i>
          </span>
        </a>
        <a href='#'>
          <span className='social__box social__box--color2'>
            <i className='fas fa-envelope'></i>
          </span>
        </a>
        <a href='#'>
          <span className='social__box social__box--color3'>
            <i className='fab fa-twitter'></i>
          </span>
        </a>
        <a href='#'>
          <span className='social__box social__box--color4'>
            <i className='fab fa-whatsapp'></i>
          </span>
        </a>
        <a href='#'>
          <span className='social__box social__box--color5'>
            <i className='fab fa-linkedin-in'></i>
          </span>
        </a>
        <a href='#'>
          <span className='social__box social__box--color6'>
            <i className='fab fa-facebook-f'></i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default social;
