import React from 'react';

import './HeadingCard.scss';

const headingCard = props => {
  return (
    <section className='heading-card'>
      <div className='heading-card__box-content'>
        <h1 className='heading-card__title'>{props.title}</h1>
        <h3 className='heading-card__subtitle'>{props.subtitle}</h3>
        <p className='heading-card__quote'>{props.quote}</p>
      </div>
      <div className='heading-card__box-photo'>
        <img
          className='heading-card__photo'
          src={props.photo}
          alt='Employee'
        />
      </div>
    </section>
  );
};

export default headingCard;
