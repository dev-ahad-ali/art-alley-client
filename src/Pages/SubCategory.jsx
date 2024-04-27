import { useLocation } from 'react-router-dom';

const SubCategory = () => {
    const location = useLocation();
    return (
        <div>
            <h2 className='text-2xl'>sub category : {location.state}</h2>
        </div>
    );
};

export default SubCategory;
