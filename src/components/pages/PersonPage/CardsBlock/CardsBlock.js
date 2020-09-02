import React from 'react';

import { companyList } from '../../../../shared';
import Card from '../../../ReusableBlocks/Card/Card';
import Button from '../../../UI/Button/Button';

import './CardsBlock.scss';

const cardsBlock = () => {
  return (
    <section className='cards-block'>
      <h2 className='cards-block__title'>חברות שהצטרפו לאחרונה</h2>
      <div className='cards-block__wrap'>
        {companyList.map(item => (
          <Card
            label={item.label}
            text={item.text}
            photo={item.photo}
            caption='עוד עלינו'
          />
        ))}
      </div>
      <div className='align-center'>
        <div className='align-center'>
          <Button btnModifier='btn--gray'>הצג עוד</Button>
        </div>
      </div>
    </section>
  );
};

export default cardsBlock;
