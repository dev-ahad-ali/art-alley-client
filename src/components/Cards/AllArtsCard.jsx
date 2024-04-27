import { Link } from 'react-router-dom';

const AllArtsCard = ({ art }) => {
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
        email,
        userName,
        stockStatus,
    } = art;

    return (
        <div className='card bg-base-100 shadow-xl lg:card-side'>
            <figure>
                <img src={imageUrl} />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{itemName}</h2>
                <p>{subcategory}</p>
                <div className='card-actions justify-end'>
                    <Link to={`/allArts/${_id}`}>
                        {' '}
                        <button className='btn btn-primary'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllArtsCard;
