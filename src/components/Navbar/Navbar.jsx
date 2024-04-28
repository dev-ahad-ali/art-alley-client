import { Link, NavLink } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import { MdLibraryAdd } from 'react-icons/md';
import { DiGhostSmall } from 'react-icons/di';
import UserMenu from './UserMenu';

const Navbar = () => {
    const navLinks = (
        <>
            <li>
                <NavLink
                    to={'/'}
                    className={({ isActive }) =>
                        isActive
                            ? 'flex items-center gap-1 bg-white text-sm font-semibold uppercase text-amber-500 duration-300 hover:bg-transparent'
                            : 'flex items-center gap-1 bg-white text-sm font-semibold uppercase duration-300 hover:bg-transparent hover:text-amber-500'
                    }
                >
                    <IoIosHome className='text-xl' />
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/allArts'}
                    className={({ isActive }) =>
                        isActive
                            ? 'flex items-center gap-1 bg-white text-sm font-semibold uppercase text-amber-500 duration-300 hover:bg-transparent'
                            : 'flex items-center gap-1 bg-white text-sm font-semibold uppercase duration-300 hover:bg-transparent hover:text-amber-500'
                    }
                >
                    <DiGhostSmall className='text-xl' />
                    All Arts
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/addArt'}
                    className={({ isActive }) =>
                        isActive
                            ? 'flex items-center gap-1 bg-white text-sm font-semibold uppercase text-amber-500 duration-300 hover:bg-transparent'
                            : 'flex items-center gap-1 bg-white text-sm font-semibold uppercase duration-300 hover:bg-transparent hover:text-amber-500'
                    }
                >
                    <MdLibraryAdd className='text-xl' />
                    Add Art
                </NavLink>
            </li>
        </>
    );

    return (
        <div className='sticky top-0 grid grid-cols-3 items-center bg-white px-5 py-2'>
            <div className='lg:hidden'>
                <div className='dropdown'>
                    <div
                        tabIndex={0}
                        role='button'
                        className='btn btn-ghost lg:hidden'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h8m-8 6h16'
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className=' dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
                    >
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className='hidden lg:flex'>
                <ul className='menu-horizontal flex items-center gap-6 px-1 hover:bg-transparent'>
                    {navLinks}
                </ul>
            </div>
            <Link
                to={'/'}
                className='flex items-center justify-center font-lobster text-4xl font-bold text-amber-900'
            >
                <img
                    src='./logo.png'
                    alt=''
                    className='relative bottom-2 h-6 w-6'
                />
                <span className='relative'>ArtAlley</span>
            </Link>
            <div className='flex items-center justify-end gap-3'>
                <UserMenu />
                <label className='grid cursor-pointer place-items-center'>
                    <input
                        type='checkbox'
                        value='synthwave'
                        className='theme-controller toggle col-span-2 col-start-1 row-start-1 bg-base-content'
                    />
                    <svg
                        className='col-start-1 row-start-1 fill-base-100 stroke-base-100'
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <circle cx='12' cy='12' r='5' />
                        <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
                    </svg>
                    <svg
                        className='col-start-2 row-start-1 fill-base-100 stroke-base-100'
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
                    </svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;
