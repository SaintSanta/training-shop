import React from 'react';

import { BENEFITS } from '../../../constants/benefits';
import { BenefitsItem } from './benefits-item/benefits-item';

import './benefits.scss';

export const Benefits = () => {
  return (
    <div className='benefits'>
      {BENEFITS.map(({ id, imageSrc, title, text, name }) => (
        <BenefitsItem key={id} img={imageSrc} title={title} text={text} name={name} />
      ))}
    </div>
  );
};
