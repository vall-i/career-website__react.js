import React from 'react';

import { pesronList } from '../../../../shared';
import PersonCard from '../../../ReusableBlocks/PersonCard/PersonCard';
import ProfileCard from '../../../ReusableBlocks/ProfileCard/ProfileCard';
import Button from '../../../UI/Button/Button';

import photo from '../../../../assets/img/profile-1.jpg';

import './Overview.scss';

const overview = props => {
  return (
    <section className='overview'>
      <h2 className='overview__title'>הכירו את אנשי הטק של השבוע</h2>
      <div className='overview__wrap'>
        <div className='overview__wrap-profile-card'>
          {pesronList.slice(0, 3).map(person => (
            <PersonCard
              key={person.id}
              name={person.name}
              text={person.text}
              photo={person.photo}
            />
          ))}
        </div>
        <ProfileCard
          photo={photo}
          title='לורם איפסום'
          subtitle='שם החברה'
          text='לורם איפסום דולור סיט אמט, קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.'
        />
      </div>
      <div className='align-center'>
        <Button btnModifier='btn--gray'>הצג עוד</Button>
      </div>
    </section>
  );
};

export default overview;
