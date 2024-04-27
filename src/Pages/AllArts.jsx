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
    }, []);

    if (artsLoading) {
        return <span className='loading loading-infinity '></span>;
    }

    return (
        <div>
            <h2 className='text-2xl'>All arts</h2>
            {arts.map((art) => (
                <AllArtsCard key={art._id} art={art} />
            ))}
        </div>
    );
};

export default AllArts;
