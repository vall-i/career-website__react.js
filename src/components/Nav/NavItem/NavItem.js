import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavItem.scss';

const navItem = props => {
  return (
    <li className='nav-item'>
      {props.linkStyle === 'nav-item__link'
      ? <NavLink exact className={props.linkStyle} to={props.link} active='active'>
        {props.children}
      </NavLink>
      : <button className={props.linkStyle} active='selected'>
        {props.children}
      </button>
    }
    </li>
  );
};

export default navItem;
