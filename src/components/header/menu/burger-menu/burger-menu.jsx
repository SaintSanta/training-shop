import { Link } from 'react-router-dom';
import { MENU } from '../../../../constants/menu';

import './burger-menu.scss';

const BurgerMenu = ({ condition, setCondition }) => {
    return (    
        <div className={condition ? "burgerItem active" : "burgerItem"} onClick={() => (setCondition(false))} data-test-id='burger-menu'>      
            {MENU.map(({ id, path, name }) => (
                <Link key={id} to={`/${path}`} className='burgerMenu' >
                    <span>{name}</span>
                </Link>
            ))}
        </div>
    );
}

export default BurgerMenu;