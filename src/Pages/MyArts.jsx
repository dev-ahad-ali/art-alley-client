import { useLoaderData } from 'react-router-dom';
import ExhibitionCard from '../components/Cards/ExhibitionCard';

const MyArts = () => {
    const data = useLoaderData();
    const arts = data.data;

    // const {
    //     _id,
    //     imageUrl,
    //     itemName,
    //     subcategory,
    //     description,
    //     price,
    //     rating,
    //     processTime,
    //     customization,
    //     email,
    //     userName,
    //     stockStatus,
    // } = art;

    return (
        <section className='mx-auto max-w-7xl px-4 py-16'>
            <h2 className='text-center font-yeseva text-2xl text-[80px]'>
                My arts
            </h2>
            <div className='mt-16 grid grid-cols-3 gap-x-4 gap-y-8'>
                {arts.map((art) => (
                    <ExhibitionCard key={art._id} art={art} />
                ))}
            </div>
        </section>
    );
};

export default MyArts;
