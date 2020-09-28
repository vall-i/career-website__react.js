import React from 'react';

import Button from '../../UI/Button/Button';

import './Card.scss';

const card = props => {
  return (
    <div className='card'>
      <img src={props.photo} className='card__photo' alt={props.title} />
      <div className='card__content'>
        <h3 className='card__heading'>{props.title}</h3>
        <p className='card__text'>{props.description}</p>
      </div>
      <div className='card__box'>
        {props.date ? (
          <div className='card__box-footer'>
            <span>{props.date}</span>
            <Button btnModifier='btn--red'>{props.caption}</Button>
          </div>
        ) : (
          <Button btnModifier='btn--red'>{props.caption}</Button>
        )}
      </div>
    </div>
  );
};

export default card;
