import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import Error from '../Pages/Error';

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
        ],
    },
]);
