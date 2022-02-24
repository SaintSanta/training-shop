import { Link } from 'react-router-dom';
import { CARDS_TEMPORARY } from '../../../constants/cards-temporary';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Autoplay } from 'swiper';
import 'swiper/css/bundle';


import Prev from '../../../components/slider/assets/arr-prev.svg';
import Next from '../../../components/slider/assets/arr-next.svg';

import './buttonProductTipe.scss';

const ButtonProductTipe = ({ productType }) => {
    const [controlledSwiper, setControlledSwiper] = useState(null);

    const setNext = () => controlledSwiper.slideNext();
    const setPrev = () => controlledSwiper.slidePrev();
    return (
        <div className='buttonContainer'>
            <div className='wrapper'>
                <div className='buttonTitle'>
                    <div className='productsTitle'>RELATED PRODUCTS</div>
                    <div className='buttons'>
                        <img src={Prev} alt="Next" className='but' onClick={setPrev} />
                        <img src={Next} alt="Prev" className='but' onClick={setNext} />
                    </div>
                </div>

                <div className='productsCards'>

                    <Swiper
                        data-test-id='related-slider'
                        onSwiper={setControlledSwiper}
                        breakpoints={{
                            400: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            500: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            800: {

                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1151: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                        loop
                        modules={[Controller, Autoplay]}
                        className="relatedSwiper"
                    >

                        {CARDS_TEMPORARY[productType].map(({ name, price, imageSrc, rating, sale, id }) => (
                            <SwiperSlide key={id}>
                                <Link key={id} to={`/${productType}/${id}`} className='cardsItem' data-test-id={`clothes-card-${productType}`}>
                                    {sale && <span className='sale'>{sale}</span>}
                                    <img src={imageSrc} alt='imgUser' className='cardsItemImg' />
                                    <div className='cardsItemName'>{name}</div>
                                    <div className='cardsItemPrice'>${price}</div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default ButtonProductTipe;