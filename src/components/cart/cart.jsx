import cart from './assets/cart.svg';

import './cart.scss';

export const Cart = () => (
  <div className='cart'>
    <img src={cart} alt='cart' className='cart-img' />
  </div>
);
