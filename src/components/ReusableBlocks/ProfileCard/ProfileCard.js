import React from 'react';

import Button from '../../UI/Button/Button';

import './ProfileCard.scss';

const profileCard = props => {
  return (
    <section className='profile-card'>
      <div className='profile-card__box-photo'>
        <img
          className='profile-card__photo'
          src={props.photo}
          alt='Profile photo'
        />
      </div>
      <div className='profile-card__box-content'>
        <h3 className='profile-card__title'>{props.title}</h3>
        <span className='profile-card__subtitle'>{props.subtitle}</span>
        <p className='profile-card__text'>{props.text}</p>
        <Button btnModifier='btn--red'>נעים להכיר</Button>
      </div>
    </section>
  );
};

export default profileCard;
