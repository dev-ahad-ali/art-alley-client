import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdCloseCircle } from 'react-icons/io';
import { RiFileEditFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { url } from '../../Utils/Url';
import { Zoom } from 'react-awesome-reveal';

const UpdateModal = ({
    showModal,
    setShowModal,
    modalData,
    refetch,
    setRefetch,
}) => {
    const { register, handleSubmit, reset } = useForm();

    const {
        _id,
        imageUrl,
        itemName,
        subcategory,
        description,
        price,
        rating,
        processTime,
        customization,
        stockStatus,
    } = modalData;

    useEffect(() => {
        let defaultValues = {};
        (defaultValues.imageUrl = imageUrl),
            (defaultValues.itemName = itemName),
            (defaultValues.subcategory = subcategory),
            (defaultValues.description = description),
            (defaultValues.price = price),
            (defaultValues.rating = rating),
            (defaultValues.processTime = processTime),
            (defaultValues.customization = customization),
            (defaultValues.stockStatus = stockStatus);
        reset({ ...defaultValues });
    }, [
        imageUrl,
        itemName,
        subcategory,
        description,
        price,
        rating,
        processTime,
        customization,
        stockStatus,
        reset,
    ]);

    const onSubmit = (data) => {
        axios.patch(`${url}/update/${_id}`, data).then((result) => {
            if (result?.data?.modifiedCount > 0) {
                toast.success('Art Updated successfully');
                setRefetch(!refetch);
                // window.location.reload();
            }
        });
        console.log(refetch);
    };
    return (
        <div className='fixed top-4 z-10 grid h-screen w-screen place-items-center bg-gray-400/50 md:inset-0'>
            <Zoom duration={300} className='md:w-1/2'>
                <div className='w-full scroll-auto rounded-xl bg-blue-100/85 p-4 dark:bg-gray-800/85'>
                    <div className='flex justify-end'>
                        <IoMdCloseCircle
                            onClick={() => setShowModal(!showModal)}
                            className='cursor-pointer text-4xl text-red-700 duration-200 hover:text-red-500'
                        />
                    </div>
                    <h2 className='flex items-center justify-center gap-2 text-center font-yeseva text-2xl text-gray-700 dark:text-white '>
                        <RiFileEditFill className='text-2xl' />
                        Update : {modalData.itemName}
                    </h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='mt-8 grid grid-cols-2 gap-4 dark:text-black'
                    >
                        <div className='space-y-3'>
                            <input
                                type='text'
                                placeholder='Item Name'
                                className='input input-bordered w-full'
                                {...register('itemName')}
                            />
                            <input
                                type='text'
                                placeholder='ImageUrl'
                                className='input input-bordered w-full'
                                {...register('imageUrl')}
                            />
                            <select
                                className='select select-bordered w-full'
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
                                <option value={'Oil_Painting'}>
                                    Oil Painting
                                </option>
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
                                className='input input-bordered w-full'
                                {...register('price')}
                            />
                            <input
                                type='text'
                                placeholder='Rating'
                                className='input input-bordered w-full'
                                {...register('rating')}
                            />
                        </div>
                        <div className='space-y-3'>
                            <select
                                className='select select-bordered w-full'
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
                            <select
                                className='select select-bordered w-full'
                                {...register('customization')}
                            >
                                <option value={''} disabled selected>
                                    Customization
                                </option>
                                <option value={'yes'}>Yes</option>
                                <option value={'no'}>No</option>
                            </select>
                            <textarea
                                type='text'
                                placeholder='Description'
                                className='input input-bordered h-[102px] w-full resize-none pt-1'
                                {...register('description')}
                            ></textarea>
                            <select
                                className='select select-bordered w-full'
                                {...register('stockStatus')}
                            >
                                <option value={''} disabled selected>
                                    Stock Status
                                </option>
                                <option value={'in stock'}>In Stock</option>
                                <option value={'made to order'}>
                                    Made to Order
                                </option>
                            </select>
                        </div>
                        <div className='col-span-2 mt-3 flex justify-center'>
                            <input
                                type='submit'
                                value='Update'
                                className='btn btn-warning font-bold uppercase text-white dark:bg-blue-400'
                            />
                        </div>
                    </form>
                </div>
            </Zoom>
        </div>
    );
};

export default UpdateModal;
