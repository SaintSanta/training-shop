import React from 'react';

import './main-news.scss';

export const MainNews = () => {
  return (
    <div className='main-news'>
      <div className='left-card'>
        <div className='btn'>
          <div className='title'>NEW SEASON</div>
          <div className='text'>LOOKBOOK COLLECTION</div>
        </div>
      </div>
      <div className='right-card'>
        <div className='btn'>
          <div className='title'>SALE</div>
          <div className='text'>
            GET UP TO <span className='text-color'>50% OFF</span>
          </div>
        </div>
      </div>
    </div>
  );
};
