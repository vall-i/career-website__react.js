import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from '../../hoc/Container/Container';
import Logo from '../UI/Logo/Logo';

import FooterImage from '../../assets/img/robot-footer.svg';
import LogoCareebiz from '../../assets/img/logo-careebiz.svg';

import './Footer.scss';

const footer = props => {
  return (
    <footer className='Footer'>
      <div className='Footer__main'>
        <Logo styled='logo--large' />
        <nav className='Footer__navigation'>
          <NavLink to='#' activeClassName='clicked'>
            עמוד ראשי
          </NavLink>
          <NavLink to='#' activeClassName='clicked'>
            הצטרפות מעסיקים
          </NavLink>
          <NavLink to='#' activeClassName='clicked'>
            תנאי שימוש
          </NavLink>
          <NavLink to='#' activeClassName='clicked'>
            מדיניות פרטיות
          </NavLink>
          <NavLink to='#' activeClassName='clicked'>
            צור קשר
          </NavLink>
        </nav>
      </div>
      <div className='Footer__bottom'>
        <Container>
          <div className='Footer__bottom-inner'>
            <img
              src={FooterImage}
              className='Footer__image'
              alt='Robot'
            />
            <div className='Footer__copyright'>
              <span>כול הזכויות שמורות &copy; 2019</span>
            </div>
            <div className='Footer__powered'>
              <img src={LogoCareebiz} alt='Careebiz logo' />
              <span>Powered by</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default footer;
