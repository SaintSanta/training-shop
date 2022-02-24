import React from 'react';
import { FilterItem } from './filter-item';

import { FILTERS } from '../../constants/filter';

import './filter.scss';

export const Filter = () => (
  <div className='filter-block'>
    <div className='color'>
      <div className='title'>COLOR</div>
      <div className='filters'>
        {FILTERS.color.map(({ id, color }) => (
          <FilterItem key={id} id={id} text={color} type='color' />
        ))}
      </div>
    </div>
    <div className='size'>
      <div className='title'>SIZE</div>
      <div className='filters'>
        {FILTERS.size.map(({ id, size }) => (
          <FilterItem key={id} id={id} text={size} type='size' />
        ))}
      </div>
    </div>
    <div className='brand'>
      <div className='title'>BRAND</div>
      <div className='filters'>
        {FILTERS.brand.map(({ id, brand }) => (
          <FilterItem key={id} id={id} text={brand} type='brand' />
        ))}
      </div>
    </div>
    <div className='price'>
      <div className='title'>PRICE</div>
      <div className='filters'>
        {FILTERS.prise.map(({ id, price }) => (
          <FilterItem key={id} id={id} text={price} type='price' />
        ))}
      </div>
    </div>
  </div>
);
