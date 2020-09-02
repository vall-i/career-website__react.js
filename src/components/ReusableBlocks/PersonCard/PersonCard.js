import React from 'react';

import './PersonCard.scss';

const personCard = props => {
  return (
    <div className='person-card'>
      <div className='person-card__photo-box'>
        <img
          src={props.photo}
          className='person-card__photo'
          alt='Employee photo'
        />
      </div>
      <div className='person-card__content'>
        <span className='person-card__text'>{props.text}</span>
        <h3 className='person-card__name'>{props.name}</h3>
      </div>
    </div>
  );
};

export default personCard;
