import axios from 'axios';
import { IoMdCloseCircle } from 'react-icons/io';
import { url } from '../../Utils/Url';
import { toast } from 'react-toastify';
import { Zoom } from 'react-awesome-reveal';

const DeleteModal = ({
    showDelete,
    setShowDelete,
    modalData,
    refetch,
    setRefetch,
}) => {
    const deleteArt = () => {
        const _id = modalData._id;
        axios.delete(`${url}/delete/${_id}`).then((result) => {
            if (result?.data?.deletedCount > 0) {
                toast.success('Art deleted successfully');
                setRefetch(!refetch);
                setShowDelete(!showDelete);
            }
        });
    };
    return (
        <div className='fixed inset-0 z-10 grid h-screen w-screen place-items-center bg-gray-400/50'>
            <Zoom className='w-4/5 lg:w-1/3' duration={300}>
                <div className='rounded-xl bg-blue-100/85  p-4 dark:bg-gray-800/85'>
                    <div className='flex justify-end'>
                        <IoMdCloseCircle
                            onClick={() => setShowDelete(!showDelete)}
                            className='cursor-pointer text-4xl text-red-700 duration-200 hover:text-red-500'
                        />
                    </div>
                    <h2 className='text-center font-yeseva text-2xl'>
                        Are you sure ?
                    </h2>
                    <p className='mt-3 text-center text-lg'>
                        You want to delete :{' '}
                        <span className='font-bold'>{modalData.itemName}</span>
                    </p>
                    <div className='flex justify-center'>
                        <button
                            onClick={deleteArt}
                            className='btn btn-error btn-sm mt-4 uppercase text-white'
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default DeleteModal;
