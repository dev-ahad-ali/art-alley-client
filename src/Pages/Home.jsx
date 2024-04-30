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
import { Zoom } from 'react-awesome-reveal';

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
                <h2 className='mt-6 text-center font-yeseva text-4xl md:mt-16 md:text-[80px]'>
                    Categories
                </h2>
                <div className='mx-auto mt-6 grid max-w-7xl grid-cols-1 gap-4 px-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3'>
                    <Zoom>
                        <LandscapePainting />
                    </Zoom>
                    <Zoom delay={250}>
                        <PortraitDrawing />
                    </Zoom>
                    <Zoom delay={300}>
                        <WatercolourPainting />
                    </Zoom>
                    <Zoom delay={450}>
                        <OilPainting />
                    </Zoom>
                    <Zoom delay={550}>
                        <CharcoalSketching />
                    </Zoom>
                    <Zoom delay={650}>
                        <CartoonDrawing />
                    </Zoom>
                </div>
            </section>
        </>
    );
};

export default Home;
