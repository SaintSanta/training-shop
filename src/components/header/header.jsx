import { Link } from 'react-router-dom';
import { CONTACTS } from '../../constants/contacts';
import Logo from './assets/CleverShop';
import { Menu } from './menu/';

export const Header = () => (
    <div className='header' data-test-id='header'>
        <div className='header-contacts'>
            <div className='wrapper'>
                <CONTACTS />                    
            </div>
        </div>
    
    <div className='header-nav'>
        <div className='wrapper'>
            <Link to='/' className='header-nav-logo' data-test-id='header-logo-link'>
            <img src={Logo} alt='Logo CleverShop' className='header-nav-logo' />
            </Link>
            <Menu />
        </div>
    </div>
    </div>
);