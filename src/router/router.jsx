import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Profile from "../pages/Profile";
import ErrorPage from "../pages/ErrorPage";

const BrowserRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {   
                index: true,
                element: <HomePage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'profile',
                element: <Profile />
            },
        ],
    },
]);

export default BrowserRouter;