import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { PiUserCirclePlusDuotone } from 'react-icons/pi';
import { Tooltip } from 'react-tooltip';
import { FaUserEdit } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { FiUserCheck } from 'react-icons/fi';
import { BsBarChartSteps } from 'react-icons/bs';

const UserMenu = () => {
    const { user, loading, logOut } = useAuth();

    return (
        <>
            <div>
                <div id='clickable' data-tooltip-id='my-tooltip-border'>
                    {loading ? (
                        <span className='loading loading-infinity text-success'></span>
                    ) : user ? (
                        <div className='avatar cursor-pointer'>
                            <div className='w-8 rounded-full ring ring-amber-800 ring-offset-2 ring-offset-base-100'>
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    ) : (
                        <PiUserCirclePlusDuotone className='cursor-pointer text-4xl hover:text-amber-600' />
                    )}
                </div>
                <Tooltip
                    id='my-tooltip-border'
                    style={{
                        backgroundColor: '#ffffff',
                        color: '#000000',
                    }}
                    border='1px solid black'
                    anchorSelect='#clickable'
                    clickable
                >
                    <div className='grid grid-cols-2 gap-2 space-y-2'>
                        {user && (
                            <div className='border-e-2 border-black'>
                                <h3 className='text-lg font-medium underline'>
                                    {user?.displayName}
                                </h3>
                                <NavLink
                                    state={'My Art'}
                                    to={`/myArts/${user?.email || user.providerData[0].email}`}
                                    className={
                                        'mt-2 flex items-center gap-2 py-1 text-sm font-bold  uppercase text-blue-600 hover:text-amber-700 hover:underline'
                                    }
                                >
                                    <BsBarChartSteps className='text-lg' />
                                    My Arts
                                </NavLink>
                            </div>
                        )}
                        <div>
                            <Link
                                to={'/login'}
                                className='flex items-center gap-3 rounded-sm border-black py-1 font-bold uppercase hover:text-red-700 '
                            >
                                <FiUserCheck className='text-xl' />
                                Login
                            </Link>
                            <Link
                                to={'/registration'}
                                className='flex items-center gap-3 rounded-sm border-black py-1  font-bold uppercase hover:text-red-700'
                            >
                                <FaUserEdit className='text-xl' /> Register
                            </Link>
                            {user && (
                                <div
                                    onClick={logOut}
                                    className='flex cursor-pointer items-center gap-3 rounded-sm border-black py-1 font-bold uppercase hover:text-red-700 '
                                >
                                    <MdLogout className='text-xl' />
                                    LogOut
                                </div>
                            )}
                        </div>
                    </div>
                </Tooltip>
            </div>
        </>
    );
};

export default UserMenu;
