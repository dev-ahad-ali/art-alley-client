import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const OilPainting = () => {
    return (
        <div className='group relative h-fit'>
            <div className='h-[200px] overflow-hidden rounded-full'>
                <img
                    className='h-full w-full rounded-full duration-300 group-hover:scale-110'
                    src={'https://i.ibb.co/pv3kYv1/oil-p-2.jpg'}
                    alt=''
                />
            </div>
            <div className='absolute top-0 flex h-[200px] w-full items-center justify-center rounded-full bg-black/20 text-center'>
                <div>
                    <h3 className='font-yeseva text-3xl text-white'>
                        Oil Painting
                    </h3>
                    <Link
                        to={'/subcategory/Oil_Painting'}
                        state={'Oil Painting'}
                        className='btn btn-sm mt-3 h-[38px] items-center gap-2 rounded-full border-none px-10 text-sm font-light uppercase duration-300 hover:bg-amber-500 hover:text-white'
                    >
                        View More
                        <BsArrowRight className='text-xl' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OilPainting;
