import React from 'react';
import PropTypes from 'prop-types';

import { SOCIAL_NETWORKS } from '../../constants/social-networks';

import './social-network.scss';

export const SocialNetwork = ({ size }) => {
  return (
    <div className='social-network'>
      {SOCIAL_NETWORKS.map(({ id, imageSrc, href }) => (
        <a href={href} className='social-network-item' key={id}>
          <img src={imageSrc} width={size} alt='imgUser' className='social-network-item-img' />
        </a>
      ))}
    </div>
  );
};

SocialNetwork.propTypes = {
  size: PropTypes.oneOf(['14px', '18px']),
};

SocialNetwork.defaultProps = {
  size: '14px',
};
