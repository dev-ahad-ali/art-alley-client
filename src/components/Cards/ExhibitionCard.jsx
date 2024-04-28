import { FaEdit, FaStar } from 'react-icons/fa';
import { GrFormNextLink } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const ExhibitionCard = ({ art }) => {
    const {
        imageUrl,
        itemName,
        subcategory,
        userName,
        rating,
        price,
        _id,
        stockStatus,
        customization,
    } = art;
    return (
        <div className='group overflow-hidden rounded-3xl bg-yellow-800 bg-opacity-30 duration-300 hover:shadow-xl'>
            <div className='relative h-[240px]'>
                <img
                    className='h-full w-full rounded-t-3xl duration-300 group-hover:scale-110'
                    src={imageUrl}
                    alt=''
                />
                <span className='absolute right-3 top-3 rounded-full bg-green-500 px-2 py-1 text-xs font-medium capitalize text-white/85'>
                    {stockStatus}
                </span>
            </div>
            <div className='p-4'>
                <div className='flex items-center justify-between'>
                    <div className='badge badge-neutral badge-outline p-3'>
                        {subcategory}
                    </div>
                    <p className='flex items-center gap-1 text-sm font-bold capitalize text-gray-600 opacity-80'>
                        <FaEdit />
                        Customization : {customization}
                    </p>
                </div>
                <div className='mt-2'>
                    <h3 className='font-yeseva text-2xl'>{itemName}</h3>
                    <p className='text-sm font-bold opacity-60'>
                        By: {userName}
                    </p>
                </div>
                <div className='mt-6 flex items-center justify-between rounded-full bg-gray-300 px-2 shadow-xl'>
                    <p className='flex items-center gap-3'>
                        <span>
                            <FaStar className='text-amber-500' />
                        </span>{' '}
                        {rating}
                    </p>
                    <p className='text-lg'>$ {price}</p>
                </div>
                <div className='mt-4 flex justify-end'>
                    <Link
                        className='flex items-center gap-2 font-semibold text-blue-600 hover:underline'
                        to={`/allArts/${_id}`}
                    >
                        {' '}
                        View Details
                        <GrFormNextLink className='text-xl' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ExhibitionCard;
