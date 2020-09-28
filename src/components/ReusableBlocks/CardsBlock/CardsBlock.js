import React from 'react';

import { companyList } from '../../../shared';
import Card from '../Card/Card';
import Button from '../../UI/Button/Button';

import './CardsBlock.scss';

const cardsBlock = () => {
  return (
    <section className='cards-block'>
      <h2 className='cards-block__title'>חברות שהצטרפו לאחרונה</h2>
      <div className='cards-block__wrap'>
        {companyList.map(item => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            photo={item.photo}
            caption='עוד עלינו'
          />
        ))}
      </div>
      <div className='align-center'>
          <Button btnModifier='btn--gray'>הצג עוד</Button>
      </div>
    </section>
  );
};

export default cardsBlock;
