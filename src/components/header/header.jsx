import { Link } from 'react-router-dom';

import { Contacts } from './contacts';
import { SocialNetwork } from '../social-network';
import { Menu } from './menu';
import { HeaderIconsNav } from './nav-bar';

import Logo from './assets/CleverShop.svg';

import './header.scss';

export const Header = () => (
  <div className='header' data-test-id='header'>
    <div className='header-contacts'>
      <div className='wrapper'>
        <Contacts />
        <SocialNetwork />
      </div>
    </div>
    <div className='header-nav'>
      <div className='wrapper'>
        <Link to='/' className='header-nav-logo-a' data-test-id='header-logo-link'>
          <img src={Logo} alt='Logo' className='header-nav-logo' />
        </Link>
        <Menu />
        <HeaderIconsNav />
      </div>
    </div>
  </div>
);
