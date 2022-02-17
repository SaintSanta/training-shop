import { Rating } from '../rating';

import { REVIEWS } from '../../constants/reviews';

import './reviews.scss';

export const Reviews = () => (
  <div className='reviews'>
    {REVIEWS.map(({ id, name, time, text, rating }) => (
      <div key={id} className='reviews-text'>
        <div className='title'>
          <div className='name'>{name}</div>
          <div className='time-rating'>
            {time}
            <Rating rating={rating} />
          </div>
        </div>
        <div className='text'>{text}</div>
      </div>
    ))}
  </div>
);
