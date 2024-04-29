import { FaEdit, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ArtDetails = () => {
    const data = useLoaderData();
    const art = data.data;
    const {
        imageUrl,
        itemName,
        subcategory,
        description,
        price,
        rating,
        processTime,
        customization,
        email,
        userName,
        stockStatus,
    } = art;
    return (
        <div className='mx-auto mt-12 max-w-7xl px-4 pb-8'>
            <div className='grid grid-cols-3 gap-4 '>
                <div className='col-span-2'>
                    <img src={imageUrl} alt='' />
                </div>
                <div className='col-span-1'>
                    <h2 className='border-b-2 pb-2 font-yeseva text-4xl'>
                        {itemName}
                    </h2>
                    <p className='flex items-center justify-between text-sm font-bold opacity-70'>
                        Author : {userName}
                        <span>{subcategory}</span>
                    </p>
                    <p className='mt-3 '>{description}</p>
                    <div className='mt-4 flex items-center justify-between border-t-2 border-black pt-2'>
                        <p className='font-bold'>
                            Made in : {processTime} Days
                        </p>
                        <p className='flex items-center gap-1 text-sm font-bold capitalize text-gray-600 opacity-80'>
                            <FaEdit />
                            Customization : {customization}
                        </p>
                    </div>
                    <div className='mt-4 flex items-center justify-between'>
                        <p className='flex items-center gap-3 font-bold'>
                            <span>
                                <FaStar className='text-amber-500' />
                            </span>{' '}
                            {rating}
                        </p>
                        <p className='font-bold'>Price : ${price}</p>
                    </div>
                    <p className='mt-4 capitalize'>
                        Currently:{' '}
                        <span className=' font-bold '>{stockStatus}</span>
                    </p>
                    <p className='font-sm mt-8 text-center font-bold opacity-50'>
                        Reach the artist : {email}{' '}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArtDetails;
