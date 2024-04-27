import { useLoaderData } from 'react-router-dom';

const MyArts = () => {
    const data = useLoaderData();
    const arts = data.data;

    // const {
    //     _id,
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
    // } = art;

    return (
        <div>
            <h2 className='text-2xl'>My arts</h2>
            {arts.map((art) => (
                <p key={art._id}>{art.itemName}</p>
            ))}
        </div>
    );
};

export default MyArts;
