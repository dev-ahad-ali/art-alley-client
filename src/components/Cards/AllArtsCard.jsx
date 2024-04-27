const AllArtsCard = ({ art }) => {
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
        <div className='card bg-base-100 shadow-xl lg:card-side'>
            <figure>
                <img src={imageUrl} />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{itemName}</h2>
                <p>{subcategory}</p>
                <div className='card-actions justify-end'>
                    <button className='btn btn-primary'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default AllArtsCard;
