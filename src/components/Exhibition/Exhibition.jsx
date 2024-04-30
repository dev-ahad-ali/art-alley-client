import { Fade } from 'react-awesome-reveal';
import ExhibitionCard from '../Cards/ExhibitionCard';

const Exhibition = ({ artData }) => {
    return (
        <section className='mx-auto max-w-7xl px-4'>
            <h2 className='text-center font-yeseva text-4xl md:text-[80px] lg:mt-8'>
                <Fade duration={200} cascade>
                    Exhibition
                </Fade>
            </h2>
            <div className='mt-6 grid grid-cols-1 gap-x-4 gap-y-8 md:mt-12 md:grid-cols-2 lg:grid-cols-3'>
                {artData.slice(0, 8).map((art) => (
                    <ExhibitionCard key={art._id} art={art} />
                ))}
            </div>
        </section>
    );
};

export default Exhibition;
