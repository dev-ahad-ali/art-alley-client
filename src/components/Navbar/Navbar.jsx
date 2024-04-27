import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    const { user, loading } = useAuth();
    const navLinks = (
        <>
            <li className=''>
                <NavLink
                    to={'/'}
                    className={({ isActive }) => {
                        isActive ? 'bg-white' : 'bg-white';
                    }}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/addArt'}
                    className={({ isActive }) => {
                        isActive ? 'bg-white' : 'bg-white';
                    }}
                >
                    Add Art
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/allArts'}
                    className={({ isActive }) => {
                        isActive ? 'bg-white' : 'bg-white';
                    }}
                >
                    All Arts
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={`/myArts/${user?.email}`}
                    className={({ isActive }) => {
                        isActive ? 'bg-white' : 'bg-white';
                    }}
                >
                    My arts
                </NavLink>
            </li>
        </>
    );

    return (
        <div className='m-2 grid grid-cols-3 items-center rounded-full bg-white p-2 shadow-xl'>
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
                        className='menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
                    >
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className='hidden lg:flex'>
                <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
            </div>
            <Link
                to={'/'}
                className='flex items-center justify-center font-lobster text-4xl font-bold'
            >
                <img
                    src='./logo.png'
                    alt=''
                    className='relative bottom-2 h-6 w-6'
                />
                <span className='relative'>ArtAlley</span>
            </Link>
            <div className='me-4 flex items-center justify-end gap-3'>
                {loading ? (
                    <span className='loading loading-infinity text-success'></span>
                ) : user ? (
                    <div className='avatar'>
                        <div className='w-8 rounded-md ring ring-primary ring-offset-2 ring-offset-base-100'>
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                ) : (
                    <Link to={'/login'}>
                        <button className='btn btn-neutral'>Login</button>
                    </Link>
                )}
                <Link to={'/registration'}>
                    <button className='btn btn-accent'>Register</button>
                </Link>
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
