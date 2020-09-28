import React from 'react';

import { employeeList } from '../../../../shared';
import PersonCard from '../../../ReusableBlocks/PersonCard/PersonCard';
import Button from '../../../UI/Button/Button';

import './Employees.scss';

const employees = () => {
  return (
    <section className='employees'>
      <h2 className='employees__title'>אנשי השבוע של הייטקיסט</h2>
      <div className='employees__wrap'>
        {employeeList.map(employee => (
          <div className='employees__wrap-inner' key={employee.id}>
            <PersonCard
              name={employee.name}
              text={employee.text}
              photo={employee.photo}
            />
          </div>
        ))}
      </div>
      <div className='align-center'>
        <Button btnModifier='btn--gray'>הצג עוד</Button>
      </div>
    </section>
  );
};

export default employees;
