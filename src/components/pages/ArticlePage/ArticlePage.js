import React from 'react';

import Container from '../../../hoc/Container/Container';
import HeadingCard from '../../ReusableBlocks/HeadingCard/HeadingCard';
import BoxWrapCenter from '../../ReusableBlocks/BoxWrapCenter/BoxWrapCenter';
import Articles from './Articles/Articles';
import ArticleBody from './ArticleBody/ArticleBody';
import Employees from './Employees/Employees';
import Social from '../../ReusableBlocks/Social/Social';

import photo from '../../../assets/img/article-1.jpg';

const articlePage = () => {
  return (
    <Container>
      <HeadingCard
        photo={photo}
        title='לורם איפסום כותרת הכתבה
        שונה שנייה של כותרת'
        subtitle='שם הכותב'
      />
      <BoxWrapCenter>
        <Articles />
        <ArticleBody />
      </BoxWrapCenter>
      <div className='margin-bottom'>
        <Social />
      </div>
      <Employees />
    </Container>
  );
};

export default articlePage;
