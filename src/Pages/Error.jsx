import { BiChevronsLeft, BiSolidMessageSquareError } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className='grid min-h-screen w-full place-items-center bg-gray-500'>
            <div className='text-center'>
                <div className='flex justify-center'>
                    <BiSolidMessageSquareError className='text-brown-600 text-[300px]' />
                </div>
                <h2 className='font-lobster text-[100px] leading-[100px] opacity-60'>
                    404
                </h2>
                <p className='-mt-4 font-yeseva text-[40px] opacity-65'>
                    Page Not Found
                </p>
                <div className='absolute left-5 top-5'>
                    <Link
                        to={'/'}
                        className='group flex items-center gap-1 p-4'
                    >
                        <BiChevronsLeft className='relative text-[40px] text-amber-500 duration-300 group-hover:-translate-x-2' />
                        <span className='font-noto text-2xl font-light text-amber-500'>
                            Back Home
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Error;
