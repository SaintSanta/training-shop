import React from 'react';

import man from './assets/man.png';
import woman from './assets/woman.png';

import './main-subscribe.scss';

export const MainSubscribe = () => {
  return (
    <div className='subscribe-block'>
      <div className='small-block-wrapper'>
        <div className='small-block'>
          <div className='title'>SPECIAL OFFER</div>
          <span className='subtitle'>
            SUBSCRIBE <br /> AND <span className='percent'>GET 10% OFF</span>
          </span>

          <input type='text' placeholder='Enter your email' className='input' />

          <button className='button' type='button'>
            SUBSCRIBE
          </button>
        </div>
        <img src={woman} alt='woman' className='woman' />
        <img src={man} alt='man' className='man' />
      </div>
    </div>
  );
};
