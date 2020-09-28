import React from 'react';

import Button from '../../UI/Button/Button';

import './StoryCard.scss';

const storyCard = props => {
  return (
    <figure className='story-card'>
      <img src={props.image} className='story-card__img' alt={props.title} />
      <div className='story-card__content'>
        <h3 className='story-card__heading'>{props.title}</h3>
        <p className='story-card__text'>{props.text}</p>
        <div className='story-card__box-footer'>
          <figcaption className='story-card__info'>
            <span>{props.date}</span>
            <span>{props.name}</span>
          </figcaption>
          <Button btnModifier='btn--red'>{props.caption}</Button>
        </div>
      </div>
    </figure>
  );
};

export default storyCard;
