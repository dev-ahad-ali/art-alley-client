import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../Utils/Url';
import AllArtsCard from '../components/Cards/AllArtsCard';

const AllArts = () => {
    const [arts, setArts] = useState([]);
    const [artsLoading, setArtsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${url}/allArts`).then((result) => {
            setArts(result.data);
            setArtsLoading(false);
        });
        window.scrollTo(0, 0);
    }, []);
    if (artsLoading) {
        return (
            <div className='grid min-h-screen min-w-full place-items-center bg-white dark:bg-black'>
                {' '}
                <span className='loading loading-ring  w-[120px] text-success'></span>
            </div>
        );
    }

    return (
        <div>
            <h2 className='mt-3 text-center font-yeseva text-4xl md:mt-6 md:text-[70px]'>
                All arts
            </h2>
            <div className='mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-4 px-4 md:mt-12 md:grid-cols-2 lg:grid-cols-4'>
                {arts.map((art) => (
                    <AllArtsCard key={art._id} art={art} />
                ))}
            </div>
        </div>
    );
};

export default AllArts;
