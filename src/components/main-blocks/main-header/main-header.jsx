import React from 'react';

import { Slider } from '../../slider';
import { SectionNav } from './section-nav';

import { SLIDER_IMG } from '../../../constants/slider-main-page';

import './main-header.scss';

export const MainHeader = () => {
  return (
    <div className='main-header'>
      <Slider array={SLIDER_IMG} />
      <SectionNav />
    </div>
  );
};
