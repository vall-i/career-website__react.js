import React from 'react';

import LogoCalcalist from '../../../assets/img/calcalist-small@2x.png';
import LogoCareebiz from '../../../assets/img/logo-careebiz.svg';

import './Logo.scss';

const logo = props => {
  return (
    <div className={['logo', props.styled].join(' ')}>
      <img src={LogoCalcalist} alt='Calcalist logo' />
      <img src={LogoCareebiz} alt='Careebiz logo' className='Logo__image' />
    </div>
  );
};

export default logo;
