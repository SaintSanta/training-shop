import React from 'react';
import { FooterSubscriber } from './footer-subscriber';
import { FooterTerminal } from './footer-terminal';
import { FooterNav } from './footer-nav';
import './footer.scss';

export const Footer = () => (
  <div className='footer' data-test-id='footer'>
    <FooterSubscriber />
    <div className='wrapper'>
      <FooterNav />
    </div>
    <FooterTerminal />
  </div>
);
