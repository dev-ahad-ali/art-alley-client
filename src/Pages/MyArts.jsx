import { useLoaderData } from 'react-router-dom';
import ExhibitionCard from '../components/Cards/ExhibitionCard';
import { useEffect, useState } from 'react';
import { ImMenu2 } from 'react-icons/im';

const MyArts = () => {
    const data = useLoaderData();
    const artData = data.data;
    const [arts, setArts] = useState([]);
    const [category, setCategory] = useState('all');
    const [myArtLoading, setMyArtLoading] = useState(true);

    useEffect(() => {
        if (category === 'all') {
            setArts(artData);
            setMyArtLoading(false);
        }
        if (category === 'customizable') {
            setMyArtLoading(true);
            const customizableArt = artData.filter(
                (art) => art.customization === 'yes',
            );
            setArts(customizableArt);
            setMyArtLoading(false);
        }
        if (category === 'not') {
            const notCustomizableArt = artData.filter(
                (art) => art.customization === 'no',
            );
            setArts(notCustomizableArt);
            setMyArtLoading(false);
        }
    }, [artData, category]);

    if (myArtLoading) {
        return <span className='loading loading-ring loading-lg'></span>;
    }

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
            <h2 className='text-center font-yeseva text-[80px]'>My arts</h2>
            <div className='mt-4 flex justify-center'>
                <div className='dropdown dropdown-end'>
                    <div
                        tabIndex={0}
                        role='button'
                        className='btn btn-outline m-1'
                    >
                        Sort By Customizability <ImMenu2 className='text-xl' />
                    </div>
                    <ul
                        tabIndex={0}
                        className='menu dropdown-content z-[1] w-52 rounded-box border bg-base-100 p-2 shadow-md'
                    >
                        <li onClick={() => setCategory('all')}>
                            <label className='flex items-center justify-between'>
                                {' '}
                                <span>All</span>{' '}
                                <input
                                    name='customization'
                                    type='radio'
                                    aria-label='All'
                                />
                            </label>
                        </li>
                        <li onClick={() => setCategory('customizable')}>
                            <label className='flex items-center justify-between'>
                                {' '}
                                <span>Customizable</span>{' '}
                                <input
                                    name='customization'
                                    type='radio'
                                    aria-label='All'
                                />
                            </label>
                        </li>
                        <li onClick={() => setCategory('not')}>
                            <label className='flex items-center justify-between'>
                                {' '}
                                <span>Not Customizable</span>{' '}
                                <input
                                    name='customization'
                                    type='radio'
                                    aria-label='All'
                                />
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='mt-6 grid grid-cols-3 gap-x-4 gap-y-8'>
                {arts.map((art) => (
                    <ExhibitionCard key={art._id} art={art} />
                ))}
            </div>
        </section>
    );
};

export default MyArts;
