import React from 'react';
import { CONTACTS } from '../../../constants/contacts';

import './contacts.scss';

export const Contacts = () => (
  <div className='contacts'>
    {CONTACTS.map(({ id, href, data, imageSrc }) => (
      <a href={href} className='contacts-item' key={id}>
        <img src={imageSrc} alt='imgUser' className='contacts-item-img' />
        <span>{data}</span>
      </a>
    ))}
  </div>
);
