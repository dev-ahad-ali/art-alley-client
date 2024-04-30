import BannerSlide from './BannerSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation } from 'swiper/modules';
import SwiperNavigation from './SwiperNavigation';

const Banner = ({ artData, dataLoading }) => {
    if (dataLoading) {
        return (
            <div className='grid min-h-screen min-w-full place-items-center bg-white dark:bg-black'>
                {' '}
                <span className='loading loading-ring  w-[120px] text-success'></span>
            </div>
        );
    }
    return (
        <div className='px-4 py-6 md:py-16'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                modules={[EffectFade, Navigation]}
                className='mySwiper'
            >
                {artData.slice(0, 3).map((slide) => (
                    <SwiperSlide key={slide._id}>
                        {' '}
                        <BannerSlide slide={slide} />
                    </SwiperSlide>
                ))}
                <SwiperNavigation />
            </Swiper>
        </div>
    );
};

export default Banner;
