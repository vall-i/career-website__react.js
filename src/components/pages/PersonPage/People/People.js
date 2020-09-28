import React from 'react';

import { pesronList } from '../../../../shared';
import PersonCard from '../../../ReusableBlocks/PersonCard/PersonCard';

import './People.scss';

const people = () => {
  return (
    <section className='people'>
      <h2 className='people__title'>אנשי השבוע</h2>
      <div className='people__wrap'>
        {pesronList.map(person => (
          <PersonCard
            key={person.id}
            photo={person.photo}
            text={person.text}
            name={person.name}
          />
        ))}
      </div>
    </section>
  );
};

export default people;
