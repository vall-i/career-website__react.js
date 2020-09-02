import React from 'react';

import Button from '../../UI/Button/Button';

import './SignUp.scss';

const signUp = () => {
  return (
    <form className='sign-up-form'>
      <h2 className='sign-up-form__title'>הירשמו לעדכונים בעולם ההיי-טק והישארו צעד אחד קדימה!</h2>
      <div className='sign-up-form__group'>
        <input type='text' className='sign-up-form__input sign-up-form__input--name' placeholder='שם מלא'/>
        <span></span>
        <input type='email' className='sign-up-form__input sign-up-form__input--email' placeholder='דוא״ל' />
        <span></span>
        <input type='tel' className='sign-up-form__input sign-up-form__input--phone' placeholder='טלפון' />
        <Button btnModifier='btn--full-red'>הרשמה</Button>
      </div>
    </form>
  );
};

export default signUp;
