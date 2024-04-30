import { GrNext, GrPrevious } from 'react-icons/gr';
import { useSwiper } from 'swiper/react';

const SwiperNavigation = () => {
    const swiper = useSwiper();
    return (
        <div className='absolute bottom-4 left-1/2 z-10 mx-auto flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-between md:w-full lg:top-1/2'>
            <button onClick={() => swiper.slidePrev()}>
                <GrPrevious className='text-[45px] duration-300 hover:text-amber-700' />
            </button>
            <button onClick={() => swiper.slideNext()}>
                <GrNext className='text-[45px] duration-300  hover:text-amber-700' />
            </button>
        </div>
    );
};

export default SwiperNavigation;
