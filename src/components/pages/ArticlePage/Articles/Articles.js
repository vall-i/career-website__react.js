import React from 'react';

import { articleList_1 } from '../../../../shared';
import Card from '../../../ReusableBlocks/Card/Card';

import './Articles.scss';

const articles = () => {
  return (
    <section className='articles'>
      <h2 className='articles__title'>כתבות השבוע</h2>
      <div className='articles__wrap'>
        {articleList_1.map(article => (
          <Card
            key={article.id}
            photo={article.photo}
            title={article.title}
            description={article.description}
            caption='קריאה'
          />
        ))}
      </div>
    </section>
  );
};

export default articles;