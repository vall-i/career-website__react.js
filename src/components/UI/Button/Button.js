import React from 'react';
// import { NavLink } from 'react-router-dom';

import './Button.scss';

const button = props => {
  return (
    <button className={['btn', props.btnModifier].join(' ')} href={props.link}>
      {props.children}
    </button>
  );
};

export default button;
