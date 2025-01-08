import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "contact",
                element: <ContactPage />
            },
        ],
    },
]);

export default router;
