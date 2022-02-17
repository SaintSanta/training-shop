import { Cart } from '../../cart/cart';

import { NAV_BAR_ICONS } from '../../../constants/nav-bar-icons';

import './header-icons-nav.scss';

export const HeaderIconsNav = () => {
  return (
    <div className='header-icons-nav'>
      {NAV_BAR_ICONS.map(({ id, imageSrc, href }) => (
        <a href={href} className='header-icons-nav-item' key={id}>
          <img src={imageSrc} alt='imgUser' className='header-icons-nav-item-img' />
        </a>
      ))}
      <Cart />
    </div>
  );
};
