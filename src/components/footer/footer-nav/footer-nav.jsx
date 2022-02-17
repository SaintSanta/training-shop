import { Link } from 'react-router-dom';

import { FOOTER_NAV } from '../../../constants/footer-nav';

import locationMarker from './assets/location-marker.svg';
import phone from './assets/phone.svg';
import clock from './assets/clock.svg';
import mail from './assets/mail.svg';

import './footer-nav.scss';

export const FooterNav = () => (
  <div className='footer-nav'>
    {FOOTER_NAV.map(({ id, links }) => (
      <div className='footer-nav-item' key={id}>
        {links.map(({ text, href }, index) => (
          <Link to={`/${href}`} data-test-id={`footer-nav-link-${href}`} className='link' key={index.toString()}>
            {text}
          </Link>
        ))}
      </div>
    ))}
    <div className='footer-nav-item'>
      <div className='link'>CONTACT US</div>
      <a href='!#' className='link'>
        <img src={locationMarker} alt='locationMarker' className='locationMarker' />
        <span>Belarus, Gomel, Lange 17</span>
      </a>
      <a href='!#' className='link'>
        <img src={phone} alt='phone' className='phone' />
        <span>+375 29 100 20 30</span>
      </a>
      <a href='!#' className='link'>
        <img src={clock} alt='clock' className='clock' />
        <span>All week 24/7</span>
      </a>
      <a href='!#' className='link'>
        <img src={mail} alt='mail' className='mail' />
        <span className='mail-text'>info@clevertec.ru</span>
      </a>
    </div>
  </div>
);
