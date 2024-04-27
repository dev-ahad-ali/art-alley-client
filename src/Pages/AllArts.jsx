import axios from 'axios';
import { useEffect, useState } from 'react';

const AllArts = () => {
    const [arts, setArts] = useState([]);
    const [artsLoading, setArtsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/allArts').then((result) => {
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
                <p key={art._id}>{art?.itemName}</p>
            ))}
        </div>
    );
};

export default AllArts;
