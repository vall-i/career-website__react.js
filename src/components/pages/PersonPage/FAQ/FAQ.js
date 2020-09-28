import React from 'react';

import { faqList } from '../../../../shared';
import ArticleCard from '../../../ReusableBlocks/ArticleCard/ArticleCard';

import './FAQ.scss';

const faq = props => {
  return (
    <div className='faq'>
      {faqList.map(faq => (
        <ArticleCard key={faq.id} title={faq.title} text={faq.text} photo={faq.photo} />
      ))}
    </div>
  );
};

export default faq;
