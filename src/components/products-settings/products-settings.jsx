import PropTypes from 'prop-types';

import adjustments from './assets/adjustments.svg';
import cross from './assets/cross.svg';
import arrow from './assets/arrow.svg';
import viewGrid from './assets/view-grid.svg';
import viewList from './assets/view-list.svg';

import './products-settings.scss';

export const ProductsSettings = ({ onToggleFilter, isFilterVisible }) => (
  <div className='products-settings'>
    <button className='filter' onClick={onToggleFilter} type='button'>
      {!isFilterVisible ? (
        <img src={adjustments} alt='filter' className='filter-img' />
      ) : (
        <img src={cross} alt='cross' className='cross' />
      )}
      FILTER
    </button>
    <div className='view'>
      <img src={viewList} alt='view-list' className='view-list-img' />
      <img src={viewGrid} alt='view-grid' className='view-grid-img' />
    </div>
    <div className='bestsellers'>
      BESTSELLERS
      <img src={arrow} alt='arrow' className='arrow-img' />
    </div>
  </div>
);

ProductsSettings.propTypes = {
  onToggleFilter: PropTypes.func.isRequired,
  isFilterVisible: PropTypes.bool.isRequired,
};
