import React from 'react';

import NavItem from './NavItem/NavItem';

import './Nav.scss';

const nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <NavItem linkStyle='nav-item__btn' link="/btn">כניסה</NavItem>
        {/* <NavItem linkStyle='nav-item__link' link="/emp">כניסת מעסיקים</NavItem>
        <NavItem linkStyle='nav-item__link' link="/act">צרו קשר</NavItem> */}
        <NavItem linkStyle='nav-item__link' link="/">ראשי</NavItem>
        <NavItem linkStyle='nav-item__link' link="/article">כתבות</NavItem>
        <NavItem linkStyle='nav-item__link' link="/person">עובדים</NavItem>
      </ul>
    </nav>
  );
};

export default nav;
