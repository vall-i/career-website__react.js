import React from 'react';

import './ArticleCard.scss';

const acticleCard = props => {
    return (
        <div className='article-card'>
            <h3 className='article-card__title'>{props.title}</h3>
            <p className='article-card__text'>{props.text}</p>
            {props.photo && <img src={props.photo} className='article-card__photo' alt='Company' />}
        </div>
    );
}

export default acticleCard;