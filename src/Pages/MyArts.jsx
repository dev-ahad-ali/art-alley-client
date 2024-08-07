import { useParams } from 'react-router-dom';
import ExhibitionCard from '../components/Cards/ExhibitionCard';
import { useEffect, useState } from 'react';
import { ImMenu2 } from 'react-icons/im';
import UpdateModal from '../components/UpdateModal/UpdateModal';
import axios from 'axios';
import { url } from '../Utils/Url';
import DeleteModal from '../components/DeleteModal/DeleteModal';
import { Zoom } from 'react-awesome-reveal';

const MyArts = () => {
    const params = useParams();
    const [arts, setArts] = useState([]);
    const [category, setCategory] = useState('all');
    const [myArtLoading, setMyArtLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [modalData, setModalData] = useState({});
    const [refetch, setRefetch] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(`${url}/myArt/${params.email}`);
            const artData = data.data;
            setArts(artData);
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
        };
        getData();
    }, [params.email, category, refetch]);

    if (myArtLoading) {
        return (
            <div className='grid min-h-screen min-w-full place-items-center bg-white dark:bg-black'>
                {' '}
                <span className='loading loading-ring  w-[120px] text-success'></span>
            </div>
        );
    }

    return (
        <>
            <section className='relative mx-auto max-w-7xl px-4 py-8 lg:py-16'>
                <h2 className='text-center font-yeseva text-4xl leading-normal lg:text-[80px]'>
                    My arts
                </h2>
                <div className='mt-4 flex justify-center'>
                    <div className='dropdown dropdown-end'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-outline m-1 dark:text-white'
                        >
                            Sort By Customizability{' '}
                            <ImMenu2 className='text-xl' />
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu dropdown-content z-[1] w-52 rounded-box border bg-base-100 p-2 shadow-md dark:text-black'
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
                <div className='mt-6 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3'>
                    {arts.map((art) => (
                        <Zoom key={art._id}>
                            <ExhibitionCard
                                key={art._id}
                                art={art}
                                showModal={showModal}
                                setShowModal={setShowModal}
                                setModalData={setModalData}
                                showDelete={showDelete}
                                setShowDelete={setShowDelete}
                            />
                        </Zoom>
                    ))}
                </div>
            </section>
            {showModal && (
                <UpdateModal
                    refetch={refetch}
                    setRefetch={setRefetch}
                    modalData={modalData}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )}
            {showDelete && (
                <DeleteModal
                    refetch={refetch}
                    setRefetch={setRefetch}
                    modalData={modalData}
                    showDelete={showDelete}
                    setShowDelete={setShowDelete}
                />
            )}
        </>
    );
};

export default MyArts;
