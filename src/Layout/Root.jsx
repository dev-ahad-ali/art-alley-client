import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <>
            <header className='h-[75px]'>
                <Navbar />
            </header>
            <Outlet />
            <ToastContainer
                position='top-center'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Zoom}
            />
        </>
    );
};

export default Root;
