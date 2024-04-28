import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../../Utils/Url';
import BannerSlide from './BannerSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation } from 'swiper/modules';
import SwiperNavigation from './SwiperNavigation';

const Banner = () => {
    const [slideData, setSlideData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    useEffect(() => {
        axios.get(`${url}/allArts`).then((data) => {
            setSlideData(data.data);
            setDataLoading(false);
        });
    }, []);
    if (dataLoading) {
        return (
            <div className='grid min-h-screen min-w-full place-items-center bg-white'>
                {' '}
                <span className='loading loading-ring  w-[120px] text-success'></span>
            </div>
        );
    }
    return (
        <div className='px-4 py-16'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                modules={[EffectFade, Navigation]}
                className='mySwiper'
            >
                {slideData.slice(0, 3).map((slide) => (
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
