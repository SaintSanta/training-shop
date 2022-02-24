import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { CardsItem } from '../../cards-item';

import { CARDS_TEMPORARY } from '../../../constants/cards-temporary';
import { EXTRA_MENU } from '../../../constants/clothes-menu';

import './clothes.scss';

export const Clothes = ({ productType }) => (
  <div className='clothes' data-test-id={`clothes-${productType}`}>
    <div className='clothes-header'>
      <div className='clothes-title'>{`${productType}’s`}</div>
      <div className='clothes-menu'>
        {EXTRA_MENU.map(({ id, name }) => (
          <div className='clothes-menu-item' key={id}>
            {name}
          </div>
        ))}
      </div>
    </div>
    <div className='cards'>
      {CARDS_TEMPORARY[productType]
        .filter((_, index) => index <= 7)
        .map((card) => (
          <CardsItem key={card.id} card={card} productType={productType} />
        ))}
    </div>
    <Link to={`/${productType}`} className='cards-item-a'>
      <button className='clothes-button' type='button'>
        SEE ALL
      </button>
    </Link>
  </div>
);

Clothes.propTypes = {
  productType: PropTypes.string.isRequired,
};
