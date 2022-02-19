import React from 'react';
import PropTypes from 'prop-types';

import star from './assets/star.svg';
import starYellow from './assets/star-yellow.svg';

import './rating.scss';

const SIZES_STARS = {
  s: '14px',
  m: '22px',
};

const MAX_RATING = 5;

export const Rating = ({ size, rating }) => {
  const arrRaiting = Array.from(Array(MAX_RATING).keys());
  return (
    <div className='rating'>
      {arrRaiting.map((item, index) => (
        <img
          key={index.toString()}
          src={item < rating ? starYellow : star}
          width={SIZES_STARS[size]}
          alt='star'
          className='rating-img'
        />
      ))}
    </div>
  );
};

Rating.propTypes = {
  size: PropTypes.oneOf(['s', 'm']),
  rating: PropTypes.number,
};

Rating.defaultProps = {
  size: 's',
  rating: 0,
};
