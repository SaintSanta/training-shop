import React from 'react';
import { Link } from 'react-router-dom';

import './section-nav.scss';

export const SectionNav = () => {
  return (
    <div className='section-nav'>
      <div className='btn-top'>
        <Link to='/women' className='btn-top-left-bg'>
          <div className='btn-top-left' type='button'>
            WOMEN
          </div>
        </Link>
        <Link to='/men' className='btn-top-right-bg'>
          <div className='btn-top-right' type='button'>
            MEN
          </div>
        </Link>
      </div>
      <Link to='/accessories' className='btn-bottom-bg'>
        <div className='btn-bottom' type='button'>
          ACCESSORIES
        </div>
      </Link>
    </div>
  );
};
