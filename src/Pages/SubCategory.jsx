import { useLoaderData, useLocation } from 'react-router-dom';

const SubCategory = () => {
    const location = useLocation();
    const data = useLoaderData();
    const categories = data.data;
    return (
        <div>
            <h2 className='text-2xl'>sub category : {location.state}</h2>
            {categories.map((category) => (
                <p key={category._id}>{category.itemName}</p>
            ))}
        </div>
    );
};

export default SubCategory;
