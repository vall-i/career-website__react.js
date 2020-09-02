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
            label={position.label}
            text={position.text}
            photo={position.photo}
            date={position.date}
            caption='קריאה'
          />
        ))}
      </div>
      <div class='align-center'>
        <Button btnModifier='btn--gray'>הצג עוד</Button>
      </div>
    </section>
  );
};

export default positions;
