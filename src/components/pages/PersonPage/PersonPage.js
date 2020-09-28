import React from 'react';

import Container from '../../../hoc/Container/Container';
import HeadingCard from '../../ReusableBlocks/HeadingCard/HeadingCard';
import BoxWrapCenter from '../../ReusableBlocks/BoxWrapCenter/BoxWrapCenter';
import People from './People/People';
import FAQ from './FAQ/FAQ';
import Social from '../../ReusableBlocks/Social/Social';
import CardsBlock from '../../ReusableBlocks/CardsBlock/CardsBlock';

import photo from '../../../assets/img/employee-1.jpg';

const personPage = () => {
  return (
    <Container>
      <HeadingCard
        photo={photo}
        title='לורם איפסום איש השבוע'
        subtitle='שם החברה'
        quote='זה ללא ספק הציטוט הכי מעורר השראה שראיתי בחיי הבוגרים, וואו!'
      />
      <BoxWrapCenter>
        <People />
        <FAQ />
      </BoxWrapCenter>
      <div className='margin-bottom'>
        <Social />
      </div>
      <CardsBlock />
    </Container>
  );
};

export default personPage;
