import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

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
        axios.post('http://localhost:5000/addArt', data).then((result) => {
            if (result?.data?.insertedId) {
                toast.success('Art added successfully');
            }
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text'
                    placeholder='ImageUrl'
                    className='input input-bordered w-full max-w-xs'
                    {...register('imageUrl')}
                />
                <input
                    type='text'
                    placeholder='Item Name'
                    className='input input-bordered w-full max-w-xs'
                    {...register('itemName')}
                />
                <select
                    className='select select-bordered w-full max-w-xs'
                    {...register('subcategory')}
                >
                    <option value={''} disabled selected>
                        Subcategory....
                    </option>
                    <option value={'Landscape_Painting'}>
                        Landscape Painting
                    </option>
                    <option value={'Portrait_Drawing'}>Portrait Drawing</option>
                    <option value={'Watercolour_Painting'}>
                        Watercolour Painting
                    </option>
                    <option value={'Oil_Painting'}>Oil Painting</option>
                    <option value={'Charcoal_Sketching'}>
                        Charcoal Sketching
                    </option>
                    <option value={'Cartoon_Drawing'}>Cartoon Drawing</option>
                </select>
                <input
                    type='text'
                    placeholder='Price'
                    className='input input-bordered w-full max-w-xs'
                    {...register('price')}
                />
                <input
                    type='text'
                    placeholder='Rating'
                    className='input input-bordered w-full max-w-xs'
                    {...register('rating')}
                />
                <select
                    className='select select-bordered w-full max-w-xs'
                    {...register('processTime')}
                >
                    <option value={''} disabled selected>
                        Process Time
                    </option>
                    <option value={'1'}>1 day</option>
                    <option value={'2'}>2 day</option>
                </select>
                <select
                    className='select select-bordered w-full max-w-xs'
                    {...register('customization')}
                >
                    <option value={''} disabled selected>
                        Customization
                    </option>
                    <option value={'yes'}>Yes</option>
                    <option value={'no'}>No</option>
                </select>
                <input
                    type='text'
                    placeholder='Description'
                    className='input input-bordered w-full max-w-xs'
                    {...register('description')}
                />
                <select
                    className='select select-bordered w-full max-w-xs'
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
                    className='input input-bordered w-full max-w-xs'
                    {...register('email')}
                />
                <input
                    type='text'
                    placeholder='User Name'
                    className='input input-bordered w-full max-w-xs'
                    {...register('userName')}
                />
                <input type='submit' value='Add' className='btn btn-accent' />
            </form>
        </div>
    );
};

export default AddArt;
