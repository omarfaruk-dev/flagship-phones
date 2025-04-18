import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import About from '../pages/About';
import Favorites from '../pages/Favorites';
import PhoneDetails from '../pages/PhoneDetails';

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                Component: Home,
                hydrateFallbackElement: <span className="loading loading-infinity loading-xl text-error"></span>,
                loader: ()=> fetch('phones.json')
            },
            {
                path: '/phone-details',
                Component: PhoneDetails
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/favorite',
                Component: Favorites
            }
        ]
    }
])

export default router;