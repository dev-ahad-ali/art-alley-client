import ExhibitionCard from '../Cards/ExhibitionCard';

const Exhibition = ({ artData }) => {
    return (
        <section className='mx-auto max-w-7xl px-4'>
            <h2 className='text-center font-yeseva text-[80px]'>Exhibition</h2>
            <div className='mt-12 grid grid-cols-3 gap-x-4 gap-y-8'>
                {artData.slice(0, 8).map((art) => (
                    <ExhibitionCard key={art._id} art={art} />
                ))}
            </div>
        </section>
    );
};

export default Exhibition;
