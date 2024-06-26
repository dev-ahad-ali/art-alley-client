import { useEffect, useState } from 'react';
import { url } from '../../Utils/url';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import FeaturedCard from '../Card/FeaturedCard';
import { Link } from 'react-router-dom';

const Featured = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${url}/rooms`);
        setRooms(data);
      } catch {
        (error) => console.log(error);
      }
    };
    getData();
  }, []);
  
  return (
    <div className='py-16 md:py-32'>
      <div className='px-5 text-center'>
        <h2 className='font-ooh-baby text-6xl font-bold leading-none md:text-[100px]'>
          Our Rooms
        </h2>
        <p className='mx-auto mt-4 max-w-4xl text-sm md:text-xl'>
          Get ready to carve through pristine powder and conquer the slopes of
          varying difficulty levels. Our resort boasts a diverse range of ski
          and snowboard trails, ensuring there’s something for everyone, from
          beginners to seasoned experts.
        </p>
      </div>
      <div className='mt-12'>
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          freeMode={true}
          modules={[FreeMode]}
          className='mySwiper !ps-5 md:!ps-[88px]'
        >
          {rooms.slice(0, 6).map((room) => (
            <SwiperSlide className='!w-[210px] md:!w-[415px]' key={room._id}>
              <FeaturedCard room={room} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='mt-12 text-center'>
        <Link
          to={'/ourRooms'}
          className='btn btn-outline rounded-none uppercase'
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Featured;
