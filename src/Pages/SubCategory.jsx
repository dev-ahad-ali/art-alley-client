import { useLoaderData, useLocation } from 'react-router-dom';
import ExhibitionCard from '../components/Cards/ExhibitionCard';
import { useEffect } from 'react';

const SubCategory = () => {
    const location = useLocation();
    const data = useLoaderData();
    const categories = data.data;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='mx-auto max-w-7xl px-4'>
            <h2 className='mt-6 text-center font-yeseva text-[60px]'>
                Category :{' '}
                <span className='text-amber-800 underline'>
                    {location.state}
                </span>
            </h2>
            <div className='mt-8 grid grid-cols-3 gap-x-4 gap-y-8'>
                {categories.map((art) => (
                    <ExhibitionCard key={art._id} art={art} />
                ))}
            </div>
        </div>
    );
};

export default SubCategory;
