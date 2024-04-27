import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <span className='loading loading-infinity text-success'></span>;
    }

    if (!user) {
        return <Navigate to={'/login'} state={location?.pathname || '/'} />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
