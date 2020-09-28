import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from '../../hoc/Container/Container';
import Logo from '../UI/Logo/Logo';

import FooterImage from '../../assets/img/robot-footer.svg';
import LogoCareebiz from '../../assets/img/logo-careebiz.svg';

import './Footer.scss';

const footer = props => {
  return (
    <footer className='footer'>
      <div className='footer__main'>
        <Logo styled='logo--large' />
        <nav className='footer__navigation'>
          <NavLink to='#' active='clicked'>
            עמוד ראשי
          </NavLink>
          <NavLink to='#' active='clicked'>
            הצטרפות מעסיקים
          </NavLink>
          <NavLink to='#' active='clicked'>
            תנאי שימוש
          </NavLink>
          <NavLink to='#' active='clicked'>
            מדיניות פרטיות
          </NavLink>
          <NavLink to='#' active='clicked'>
            צור קשר
          </NavLink>
        </nav>
      </div>
      <div className='footer__bottom'>
        <Container>
          <div className='footer__bottom-inner'>
            <img
              src={FooterImage}
              className='footer__image'
              alt='Robot'
            />
            <div className='footer__copyright'>
              <span>כול הזכויות שמורות &copy; 2019</span>
            </div>
            <div className='footer__powered'>
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
