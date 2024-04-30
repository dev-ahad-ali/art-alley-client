import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';

const Root = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            document.title = `Art Alley | Home`;
        } else {
            const firstLetter = location.pathname.charAt(1).toUpperCase();
            const otherLetters = location.pathname.slice(2);
            const title = firstLetter + otherLetters;

            document.title = `Art Alley | ${title}`;
        }
        if (location.state) {
            document.title = location.state;
        }
        if (location.pathname === '/login') {
            document.title = `Art Alley | Login`;
        }
    }, [location.pathname, location.state]);
    return (
        <>
            <header className='h-[75px]'>
                <Navbar />
            </header>
            <Outlet />
            <Footer />
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
