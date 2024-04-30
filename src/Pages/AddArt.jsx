import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { url } from '../Utils/Url';

const AddArt = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // const {
        //     imageUrl,
        //     itemName,
        //     subcategory,
        //     description,
        //     price,
        //     rating,
        //     processTime,
        //     customization,
        //     email,
        //     userName,
        //     stockStatus,
        // } = data;
        axios.post(`${url}/addArt`, data).then((result) => {
            if (result?.data?.insertedId) {
                toast.success('Art added successfully');
            }
        });
        reset();
    };

    return (
        <div className='mx-auto max-w-6xl px-4'>
            <h2 className='mt-8 text-center font-yeseva text-4xl'>
                Add Your Art
            </h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='mt-8 grid grid-cols-1 gap-3 md:grid-cols-2'
            >
                <div className='space-y-3'>
                    <input
                        type='text'
                        placeholder='Item Name'
                        className='input input-bordered w-full dark:border-white dark:bg-black dark:focus:border-white'
                        {...register('itemName', {
                            required: {
                                value: true,
                                message: 'Must fill up',
                            },
                        })}
                    />
                    {errors.itemName && (
                        <p className='font-noto text-sm font-semibold text-red-500'>
                            {errors.itemName.message}
                        </p>
                    )}
                    <input
                        type='text'
                        placeholder='ImageUrl'
                        className='input input-bordered w-full dark:border-white dark:bg-black dark:focus:border-white'
                        {...register('imageUrl', {
                            required: {
                                value: true,
                                message: 'Must fill up',
                            },
                        })}
                    />
                    {errors.imageUrl && (
                        <p className='font-noto text-sm font-semibold text-red-500'>
                            {errors.imageUrl.message}
                        </p>
                    )}
                    <select
                        className='select select-bordered w-full dark:border-white dark:bg-black dark:focus:border-white'
                        {...register('subcategory')}
                    >
                        <option value={''} disabled selected>
                            Subcategory....
                        </option>
                        <option value={'Landscape_Painting'}>
                            Landscape Painting
                        </option>
                        <option value={'Portrait_Drawing'}>
                            Portrait Drawing
                        </option>
                        <option value={'Watercolour_Painting'}>
                            Watercolour Painting
                        </option>
                        <option value={'Oil_Painting'}>Oil Painting</option>
                        <option value={'Charcoal_Sketching'}>
                            Charcoal Sketching
                        </option>
                        <option value={'Cartoon_Drawing'}>
                            Cartoon Drawing
                        </option>
                    </select>
                    <input
                        type='text'
                        placeholder='Price'
                        className='input input-bordered w-full dark:border-white dark:bg-black dark:focus:border-white'
                        {...register('price', {
                            required: {
                                value: true,
                                message: 'Must fill up',
                            },
                        })}
                    />
                    {errors.price && (
                        <p className='font-noto text-sm font-semibold text-red-500'>
                            {errors.price.message}
                        </p>
                    )}
                    <input
                        type='text'
                        placeholder='Rating'
                        className='input input-bordered w-full dark:border-white dark:bg-black dark:focus:border-white'
                        {...register('rating')}
                    />
                    {errors.rating && (
                        <p className='font-noto text-sm font-semibold text-red-500'>
                            {errors.rating.message}
                        </p>
                    )}
                    <select
                        className='select select-bordered w-full dark:border-white dark:bg-black dark:focus:border-white'
                        {...register('processTime')}
                    >
                        <option value={''} disabled selected>
                            Process Time
                        </option>
                        <option value={'1'}>1 day</option>
                        <option value={'2'}>2 day</option>
                        <option value={'3'}>3 day</option>
                        <option value={'4'}>4 day</option>
                        <option value={'5'}>5 day</option>
                    </select>
                </div>
                <div className='space-y-3'>
                    <select
                        className='select select-bordered w-full dark:border-white dark:bg-black dark:focus:border-white'
                        {...register('customization')}
                    >
                        <option value={''} disabled selected>
                            Customization
                        </option>
                        <option value={'yes'}>Yes</option>
                        <option value={'no'}>No</option>
                    </select>
                    <select
                        className='select select-bordered w-full dark:border-white dark:bg-black dark:focus:border-white'
                        {...register('stockStatus')}
                    >
                        <option value={''} disabled selected>
                            Stock Status
                        </option>
                        <option value={'in stock'}>In Stock</option>
                        <option value={'made to order'}>Made to Order</option>
                    </select>
                    <input
                        type='text'
                        placeholder='Email'
                        className='input input-bordered w-full dark:border-white dark:bg-black dark:focus:border-white'
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Must fill up',
                            },
                        })}
                    />
                    {errors.email && (
                        <p className='font-noto text-sm font-semibold text-red-500'>
                            {errors.email.message}
                        </p>
                    )}
                    <input
                        type='text'
                        placeholder='User Name'
                        className='input input-bordered w-full dark:border-white dark:bg-black dark:focus:border-white'
                        {...register('userName', {
                            required: {
                                value: true,
                                message: 'Must fill up',
                            },
                        })}
                    />
                    {errors.userName && (
                        <p className='font-noto text-sm font-semibold text-red-500'>
                            {errors.userName.message}
                        </p>
                    )}
                    <textarea
                        type='text'
                        placeholder='Description'
                        className='input input-bordered h-[102px] w-full resize-none pt-2 dark:border-white dark:bg-black dark:focus:border-white'
                        {...register('description', {
                            required: {
                                value: true,
                                message: 'Must fill up',
                            },
                        })}
                    ></textarea>
                    {errors.description && (
                        <p className='font-noto text-sm font-semibold text-red-500'>
                            {errors.description.message}
                        </p>
                    )}
                </div>
                <input
                    type='submit'
                    value='Add'
                    className='btn btn-accent mt-3 text-xl font-bold text-white md:col-span-2 dark:bg-white dark:text-black'
                />
            </form>
        </div>
    );
};

export default AddArt;
