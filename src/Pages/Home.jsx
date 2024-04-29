import Banner from '../components/Banner/Banner';
import Exhibition from '../components/Exhibition/Exhibition';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../Utils/Url';
import LandscapePainting from '../components/Subcategories/LandscapePainting';
import PortraitDrawing from '../components/Subcategories/ProtraitDrawing';
import WatercolourPainting from '../components/Subcategories/WatercolourPainting';
import OilPainting from '../components/Subcategories/OilPainting';
import CharcoalSketching from '../components/Subcategories/CharcoalSketching';
import CartoonDrawing from '../components/Subcategories/CartoonDrawing';

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
            <section>
                <h2 className='mt-16 text-center font-yeseva text-[80px]'>
                    Categories
                </h2>
                <div className='mx-auto mt-16 grid max-w-7xl grid-cols-3 gap-4 px-4'>
                    <LandscapePainting />
                    <PortraitDrawing />
                    <WatercolourPainting />
                    <OilPainting />
                    <CharcoalSketching />
                    <CartoonDrawing />
                </div>
            </section>
        </>
    );
};

export default Home;
