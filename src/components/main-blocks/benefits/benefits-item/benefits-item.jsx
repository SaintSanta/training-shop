import PropTypes from 'prop-types';

import './benefits-item.scss';

export const BenefitsItem = ({ img, title, text, name }) => {
  return (
    <div className='benefits-item'>
      <img src={img} alt={name} className='benefits-item-img' />
      <div className='benefits-item-description'>
        <div className='title'>{title}</div>
        <div className='text'>{text}</div>
      </div>
    </div>
  );
};

BenefitsItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
