import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Slide } from 'react-awesome-reveal';

const Registration = () => {
    const { createUser, logOut, updateUserProfile } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { Email, Password, PhotoURL, Name } = data;
        // crate user and add photo and name
        createUser(Email, Password).then(() => {
            updateUserProfile(Name, PhotoURL).then(() => {
                toast.success('Account created successfully,Login Now!');
                reset();
                logOut();
            });
        });
    };

    // Show hide password
    const handleShow = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className=' grid min-h-[calc(100vh-102px)] place-items-center'>
            <Slide className=' md:w-[400px]' direction='down'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='mx-auto space-y-6 rounded-lg bg-slate-400/40 px-4 py-8 shadow-xl dark:text-black'
                >
                    <h2 className='text-center font-yeseva text-4xl dark:text-white'>
                        Sign Up
                    </h2>
                    <div>
                        <label className='input input-bordered flex items-center gap-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 16 16'
                                fill='currentColor'
                                className='h-4 w-4 opacity-70'
                            >
                                <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
                            </svg>
                            <input
                                type='text'
                                className='grow'
                                placeholder='Username'
                                {...register('Name', {
                                    required: {
                                        value: true,
                                        message: 'Must enter a Name',
                                    },
                                })}
                            />
                        </label>
                        {errors.Name && (
                            <p className='font-noto text-sm font-semibold text-red-500'>
                                {errors.Name.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className='input input-bordered flex items-center gap-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 16 16'
                                fill='currentColor'
                                className='h-4 w-4 opacity-70'
                            >
                                <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
                            </svg>
                            <input
                                type='text'
                                className='grow'
                                placeholder='Photo URL'
                                {...register('PhotoURL', {
                                    required: {
                                        value: true,
                                        message: 'Must enter a Photo Url',
                                    },
                                })}
                            />
                        </label>
                        {errors.PhotoURL && (
                            <p className='font-noto text-sm font-semibold text-red-500'>
                                {errors.PhotoURL.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className='input input-bordered flex items-center gap-2'>
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
                            <p className='font-noto text-sm font-semibold text-red-500'>
                                {errors.Email.message}
                            </p>
                        )}
                    </div>
                    <div>
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
                                    placeholder='Password'
                                    {...register('Password', {
                                        required: {
                                            value: true,
                                            message: 'Must enter a password',
                                        },
                                        minLength: {
                                            value: 6,
                                            message:
                                                'Password must be 6 characters long',
                                        },
                                        validate: {
                                            includesUppercase: (v) => {
                                                const pattern = /(?=.*[A-Z])/;
                                                if (!pattern.test(v)) {
                                                    return 'Password must include 1 uppercase letter';
                                                }
                                            },
                                            includeLowercase: (v) => {
                                                const pattern = /(?=.*[a-z])/;
                                                if (!pattern.test(v)) {
                                                    return 'Password must include 1 lowercase letter';
                                                }
                                            },
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
                        </div>
                        {errors.Password && (
                            <p className='font-noto text-sm font-semibold text-red-500'>
                                {errors.Password.message}
                            </p>
                        )}
                    </div>
                    <div className='flex justify-center'>
                        <input
                            type='submit'
                            value='Sign Up'
                            className='btn btn-secondary w-full uppercase text-white'
                        />
                    </div>
                    <div>
                        <p className='mt-4 text-center font-light dark:text-white'>
                            Already have an account?{' '}
                            <Link
                                to={'/login'}
                                className='font-bold text-blue-600 hover:underline'
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </Slide>
        </div>
    );
};

export default Registration;
