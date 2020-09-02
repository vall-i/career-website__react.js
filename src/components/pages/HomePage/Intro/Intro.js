import React from 'react';

import logoHitechist from '../../../../assets/img/logo-hitechist.svg';

import './Intro.scss';

const intro = () => {
  return (
    <div className='intro'>
      <div className='intro__inner'>
        <img className='intro__logo' src={logoHitechist} alt='Hitechist logo' />
        <h1 className='intro__title'>
          <span className='intro__title--main'>
            הצטרפו למעסיקים המובילים בעולם ההיי-טק
          </span>
          <span className='intro__title--sub'>
            המעסיקים המבוקשים. המשרות החמות. המידע מהשטח.
          </span>
        </h1>
        <div className='intro__powered'>
          <span className='intro__powered--sub'>powered by</span>
          <span className='intro__powered--main'>careebiz</span>
        </div>
      </div>
    </div>
  );
};

export default intro;
