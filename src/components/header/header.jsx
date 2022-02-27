import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Contacts } from './contacts';
import { SocialNetwork } from '../social-network';
import { Menu } from './menu';
import { HeaderIconsNav } from './nav-bar';

import Logo from './assets/CleverShop.svg';

import './header.scss';
import BurgerMenu from './menu/burger-menu/burger-menu';
import BurgerBtn from './menu/burger-menu/hamburger-btn/burger-btn';

export const Header = () => {
  const [condition, setCondition] = useState(false);

  function closeBurger(condition){
    if(condition)
    setCondition(false);
  }
  return (
  <div className='header' data-test-id='header' onClick={() => closeBurger(condition)}>
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
        <BurgerBtn condition={condition} setCondition={setCondition}/>
        <BurgerMenu condition={condition} setCondition={setCondition}/>
      </div>
    </div>
  </div>
  );
};
