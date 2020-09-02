import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavItem.scss';

const navItem = props => {
  return (
    <li className='NavItem'>
      {props.linkStyle === 'NavItem__link'
      ? <NavLink className={props.linkStyle} to={props.link} activeClassName='active'>
        {props.children}
      </NavLink>
      : <button className={props.linkStyle} activeClassName='selected'>
        {props.children}
      </button>
    }
    </li>
  );
};

export default navItem;
