import React from 'react';
import SliderSlick from 'react-slick';

import { officeList } from '../../../shared';
import companyLogo from '../../../assets/img/codex-logo.png';

import './OfficeView.scss';

const officeView = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='office-view'>
      <h2 className='office-view__title'>ביקור במשרד</h2>
      <SliderSlick {...settings}>
        {officeList.map(item => (
          <div>
            <img src={item} alt={item} />
          </div>
        ))}
      </SliderSlick>
      <div className='office-view__logo-box'>
          <img src={companyLogo} alt="Company logo" />
      </div>
    </div>
  );
  //   }
};

export default officeView;
