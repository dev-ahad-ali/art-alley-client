import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import AddArt from '../Pages/AddArt';
import Registration from '../Pages/Registration';
import Login from '../Pages/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AllArts from '../Pages/AllArts';

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/registration',
                element: <Registration />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/addArt',
                element: (
                    <PrivateRoute>
                        <AddArt />
                    </PrivateRoute>
                ),
            },
            {
                path: '/allArts',
                element: <AllArts />,
            },
        ],
    },
]);
