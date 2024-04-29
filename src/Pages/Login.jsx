import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillGoogleSquare } from 'react-icons/ai';

const Login = () => {
    const { signInUser, setLoading, googleSignIn, facebookSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { Email, Password } = data;

        // Login user
        signInUser(Email, Password)
            .then((result) => {
                if (result.user) {
                    toast.success('Login successfully');
                    if (result.user) {
                        // navigate(from);
                        console.log(result.user);
                    }
                }
            })
            .catch(() => {
                setLoading(false);
                setLoginError(
                    'Please check if you have entered a valid email or password',
                );
            });
    };

    // Social login
    const handleSocialLogin = (socialProvider) => {
        socialProvider()
            .then((result) => {
                if (result.user) {
                    navigate(from);
                }
            })
            .catch(() => {
                setLoading(false);
            });
    };

    // Show hide password
    const handleShow = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className=' grid min-h-[calc(100vh-102px)] place-items-center'>
            <form
                className='mx-auto w-[400px] space-y-6 rounded-lg bg-slate-400/40 px-4 py-8 shadow-xl'
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className='text-center font-yeseva text-4xl'>Login</h2>
                <div>
                    <label className='input input-bordered flex w-full items-center gap-2'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 16 16'
                            fill='currentColor'
                            className='h-4 w-4 opacity-70'
                        >
                            <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
                            <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
                        </svg>
                        <input
                            type='text'
                            className='grow'
                            placeholder='Email'
                            {...register('Email', {
                                required: {
                                    value: true,
                                    message: 'Must enter an Email',
                                },
                            })}
                        />
                    </label>
                    {errors.Email && (
                        <p className='text-sm font-semibold text-red-500'>
                            {errors.Email.message}
                        </p>
                    )}
                </div>
                <div className='relative'>
                    <label className='input input-bordered flex items-center gap-2'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 16 16'
                            fill='currentColor'
                            className='h-4 w-4 opacity-70'
                        >
                            <path
                                fillRule='evenodd'
                                d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                                clipRule='evenodd'
                            />
                        </svg>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className='grow'
                            {...register('Password', {
                                required: {
                                    value: true,
                                    message: 'Must enter a password',
                                },
                            })}
                        />
                    </label>
                    <span
                        className='absolute right-2 top-1/2 -translate-y-1/2 text-xl'
                        onClick={handleShow}
                    >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                    {errors.Password ? (
                        <p className='font-noto text-sm font-semibold text-red-500'>
                            {errors.Password.message}
                        </p>
                    ) : loginError ? (
                        <p className='font-noto text-sm font-semibold text-red-500'>
                            {loginError}
                        </p>
                    ) : (
                        <></>
                    )}
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <AiFillGoogleSquare
                        onClick={() => handleSocialLogin(googleSignIn)}
                        className='cursor-pointer text-[40px] text-red-500'
                    />
                    <FaFacebook
                        onClick={() => handleSocialLogin(facebookSignIn)}
                        className='cursor-pointer text-[38px] text-blue-600'
                    />
                </div>
                <div className='flex justify-center'>
                    <input
                        type='submit'
                        value='Login'
                        className='btn btn-warning w-full uppercase text-white'
                    />
                </div>
                <div>
                    <p className='mt-4 text-center font-light'>
                        Don&apos;t have an account?{' '}
                        <Link
                            to={'/registration'}
                            className='font-bold text-blue-600 hover:underline'
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
