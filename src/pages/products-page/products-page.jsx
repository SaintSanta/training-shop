import { useState } from 'react';
import PropTypes from 'prop-types';

import { ProductsSettings } from '../../components/products-settings';
import { ProductsHeader } from '../../components/products-header';
import { CardsItem } from '../../components/cards-item';
import { Filter } from '../../components/filter';

import { CARDS_TEMPORARY } from '../../constants/cards-temporary';

import './products-page.scss';

export const ProductsPage = ({ productType }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const onToggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className='products-page' data-test-id={`products-page-${productType}`}>
      <ProductsHeader productType={productType} />
      <div className='wrapper'>
        <ProductsSettings onToggleFilter={onToggleFilter} isFilterVisible={isFilterVisible} />
        {isFilterVisible && <Filter />}
        <div className='cards'>
          {CARDS_TEMPORARY[productType].map((card) => (
            <CardsItem key={card.id} card={card} productType={productType} />
          ))}
        </div>
      </div>
    </div>
  );
};

ProductsPage.propTypes = {
  productType: PropTypes.string.isRequired,
};
