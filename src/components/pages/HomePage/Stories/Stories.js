import React from 'react';

import { storyList } from '../../../../shared';
import StoryCard from '../../../ReusableBlocks/StoryCard/StoryCard';
import Button from '../../../UI/Button/Button';

import './Stories.scss';

const stories = () => {
  return (
    <section className='stories'>
      <h2 className='stories__title'>מאמרי הייטקיסט</h2>
      <div className='stories__wrap'>
        {storyList.map(story => (
          <StoryCard
            label={story.label}
            text={story.text}
            image={story.image}
            caption='קריאה'
            name={story.name}
            date={story.date}
          />
        ))}
      </div>
      <div class='align-center'>
        <Button btnModifier='btn--gray'>הצג עוד</Button>
      </div>
    </section>
  );
};

export default stories;
