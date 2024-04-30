import { FaStar } from 'react-icons/fa';
import { GrLinkNext } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const AllArtsCard = ({ art }) => {
    const { _id, imageUrl, itemName, subcategory, rating } = art;

    return (
        <div className='group relative h-full overflow-hidden rounded-xl bg-base-100 shadow-xl '>
            <figure className='h-full rounded-xl'>
                <img
                    className='h-full w-full rounded-xl duration-300 group-hover:scale-110'
                    src={imageUrl}
                />
            </figure>
            <div className='absolute inset-0 grid h-full w-full place-items-center rounded-xl bg-black/40'>
                <div className='text-center'>
                    <h2 className='font-yeseva text-2xl text-white'>
                        {itemName}
                    </h2>
                    <p className='text-sm text-white opacity-75'>
                        {subcategory}
                    </p>
                    <p className='absolute left-3 top-3 flex items-center gap-3 text-white'>
                        <span>
                            <FaStar className='text-amber-500' />
                        </span>{' '}
                        {rating}
                    </p>
                    <div className=''>
                        <Link to={`/allArts/${_id}`} state={`${itemName}`}>
                            {' '}
                            <button className='btn btn-sm mt-3 rounded-full duration-300 hover:scale-110'>
                                View Details
                                <GrLinkNext />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllArtsCard;
