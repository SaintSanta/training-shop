import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import share from './assets/share.svg';

import './products-header.scss';

export const ProductsHeader = ({ productType }) => (
  <div className='clothes-page-header'>
    <div className='header-abowe wrapper'>
      <div className='back'>
        <Link to='/' className='home'>
          <span className='home'>Home</span>
        </Link>
        ►<span className='name-page'>{productType}</span>
      </div>
      <div className='share'>
        <img src={share} alt='share' className='share-img' />
        Share
      </div>
    </div>
    <div className='header-below wrapper'>
      <span className='title'>{productType}</span>
    </div>
  </div>
);

ProductsHeader.propTypes = {
  productType: PropTypes.string.isRequired,
};
