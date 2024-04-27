import { Link } from 'react-router-dom';

const Home = () => {
    return (
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
        </div>
    );
};

export default Home;
