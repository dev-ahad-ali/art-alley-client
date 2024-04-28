import { Link } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Exhibition from '../components/Exhibition/Exhibition';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../Utils/Url';

const Home = () => {
    const [artData, setArtData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    useEffect(() => {
        axios.get(`${url}/allArts`).then((data) => {
            setArtData(data.data);
            setDataLoading(false);
        });
    }, []);
    return (
        <>
            <Banner artData={artData} dataLoading={dataLoading} />
            <Exhibition artData={artData} />
            <div>
                <h2 className='text-2xl'>this is Home</h2>
                <Link
                    to={'/subcategory/Landscape_Painting'}
                    state={'Landscape Painting'}
                >
                    Landscape Painting
                </Link>
                <Link
                    to={'/subcategory/Portrait_Drawing'}
                    state={'Portrait Drawing'}
                >
                    Portrait Drawing
                </Link>
                <Link
                    to={'/subcategory/Watercolour_Painting'}
                    state={'Watercolour Painting'}
                >
                    Watercolour Painting
                </Link>
                <Link to={'/subcategory/Oil_Painting'} state={'Oil Painting'}>
                    Oil Painting
                </Link>
                <Link
                    to={'/subcategory/Charcoal_Sketching'}
                    state={'Charcoal Sketching'}
                >
                    Charcoal Sketching
                </Link>
                <Link
                    to={'/subcategory/Cartoon_Drawing'}
                    state={'Cartoon Drawing'}
                >
                    Cartoon Drawing
                </Link>
            </div>
        </>
    );
};

export default Home;
