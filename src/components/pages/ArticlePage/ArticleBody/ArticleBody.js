import React from 'react';

import { articleList_2 } from '../../../../shared';
import ArticleCard from '../../../ReusableBlocks/ArticleCard/ArticleCard';

import './ArticleBody.scss';

const articleBody = () => {
  return (
    <div className='article-body'>
      {articleList_2.map(article => (
        <ArticleCard key={article.id} title={article.title} text={article.text} photo={article.photo} />
      ))}
    </div>
  );
};

export default articleBody;