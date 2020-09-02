import React from 'react';

import NavItem from './NavItem/NavItem';

import './Nav.scss';

const nav = props => {
  return (
    <nav className='Nav'>
      <ul className='Nav__list'>
        <NavItem linkStyle='NavItem__btn' link="/btn">כניסה</NavItem>
        <NavItem linkStyle='NavItem__link' link="/emp">כניסת מעסיקים</NavItem>
        <NavItem linkStyle='NavItem__link' link="/act">צרו קשר</NavItem>
        <NavItem linkStyle='NavItem__link' link="/article">כתבות</NavItem>
        <NavItem linkStyle='NavItem__link' link="/person">עובדים</NavItem>
      </ul>
    </nav>
  );
};

export default nav;
