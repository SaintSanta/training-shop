import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Rating } from '../rating';

import share from './assets/share.svg';

import './product-header.scss';

export const ProductHeader = ({ productType, name, rating }) => (
  <div className='product-page-header'>
    <div className='header-abowe wrapper'>
      <div className='back'>
        <Link to='/' className='home'>
          <span className='home'>Home</span>
        </Link>
        <span className='arr'>►</span>
        <Link to={`/${productType}`} className='product-back'>
          {productType}
        </Link>
        <span className='arr'>►</span>
        <span className='product'>{name}</span>
      </div>
      <div className='share'>
        <img src={share} alt='share' className='share-img' />
        Share
      </div>
    </div>
    <div className='header-below wrapper'>
      <span className='title'>{name}</span>
    </div>
    <div className='header-bottom wrapper'>
      <div className='rating'>
        <Rating rating={rating} />
        <span className='reviews'>2 Reviews</span>
      </div>
      <div className='count'>
        <span className='sku'>
          SKU: <span className='bold'>777</span>
        </span>
        <span className='availability'>
          Availability: <span className='bold'>In Stock</span>
        </span>
      </div>
    </div>
  </div>
);

ProductHeader.propTypes = {
  productType: PropTypes.string.isRequired,
  name: PropTypes.string,
  rating: PropTypes.number,
};

ProductHeader.defaultProps = {
  name: '',
  rating: 0,
};
