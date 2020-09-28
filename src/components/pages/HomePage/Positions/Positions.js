import React from 'react';

import { positionList } from '../../../../shared';
import Card from '../../../ReusableBlocks/Card/Card';
import Button from '../../../UI/Button/Button';

import './Positions.scss';

const positions = () => {
  return (
    <section className='positions'>
      <h2 className='positions__title'>משרות חמות</h2>
      <div className='positions__wrap'>
        {positionList.map(position => (
          <Card
            key={position.id}
            title={position.title}
            description={position.description}
            photo={position.photo}
            date={position.date}
            caption='קריאה'
          />
        ))}
      </div>
      <div className='align-center'>
        <Button btnModifier='btn--gray'>הצג עוד</Button>
      </div>
    </section>
  );
};

export default positions;
