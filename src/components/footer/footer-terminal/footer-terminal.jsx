import React from 'react';
import stripe from './assets/stripe.svg';
import aes from './assets/aes.svg';
import paypal from './assets/paypal.svg';
import visa from './assets/visa.svg';
import mastercard from './assets/mastercard.svg';
import discover from './assets/discover.svg';
import americanExpress from './assets/american-express.svg';

import './footer-terminal.scss';

export const FooterTerminal = () => (
  <div className='footer-terminal'>
    <div className='wrapper'>
      <div className='text'>Copyright © 2032 all rights reserved</div>
      <div className='icons'>
        <img src={stripe} alt='stripe' className='stripe' />
        <img src={aes} alt='aes' className='aes' />
        <img src={paypal} alt='paypal' className='paypal' />
        <img src={visa} alt='visa' className='visa' />
        <img src={mastercard} alt='mastercard' className='mastercard' />
        <img src={discover} alt='discover' className='discover' />
        <img src={americanExpress} alt='americanExpress' className='americanExpress' />
      </div>
      <a href='https://clevertec.ru/study/frontend.html' target='_blank' rel='noreferrer' className='text-link'>
        Clevertec.ru/training
      </a>
    </div>
  </div>
);
