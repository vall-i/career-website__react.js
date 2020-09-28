import React from 'react';

import Intro from './Intro/Intro';
import Container from '../../../hoc/Container/Container';
import Overview from './Overview/Overview';
import Stories from './Stories/Stories';
import CardsBlock from '../../ReusableBlocks/CardsBlock/CardsBlock';
import Positions from './Positions/Positions';
import OfficeView from '../../ReusableBlocks/OfficeView/OfficeView';
import SignUp from '../../ReusableBlocks/SignUp/SignUp';

const homePage = () => {
  return (
    <>
      <Intro />
      <Container>
        <Overview />
        <Stories />
        <OfficeView />
        <CardsBlock />
        <Positions />
        <SignUp />
      </Container>
    </>
  );
};

export default homePage;
