import React from 'react';
import PropTypes from 'prop-types';

import './filter-item.scss';

export const FilterItem = ({ text, id, type }) => (
  <label className='checkbox-label' htmlFor={`${type}-${id}`} key={id}>
    <input type='checkbox' className='checkbox-input' id={`${type}-${id}`} />
    <span className='checkbox-text'>{text}</span>
  </label>
);

FilterItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
