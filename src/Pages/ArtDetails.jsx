import { useLoaderData } from 'react-router-dom';

const ArtDetails = () => {
    const data = useLoaderData();
    const art = data.data;
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
        <div>
            <h2 className='text-2xl'>{_id}</h2>
        </div>
    );
};

export default ArtDetails;
