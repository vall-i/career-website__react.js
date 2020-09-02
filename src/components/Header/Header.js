import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../UI/Logo/Logo';
import Nav from '../Nav/Nav';

import './Header.scss';

const header = () => {
  return (
    <header className='header'>
      <div className='header__inner'>
        <Link to='/'><Logo /></Link>
        <button className='header__btn-search'>
          <i className='fas fa-search'></i>
        </button>
        <Nav />
      </div>
    </header>
  );
};

export default header;
