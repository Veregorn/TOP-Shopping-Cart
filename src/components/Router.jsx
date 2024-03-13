import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from './HomePage.jsx'
import ErrorPage from './ErrorPage.jsx'
import ProductListPage from './ProductListPage.jsx'
import ProductDetailsPage from './ProductDetailsPage.jsx'

const Router = () => {
    const router = createBrowserRouter([
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
                    path: 'productList/:category?',
                    element: <ProductListPage />
                },
                {
                    path: 'product/:productId',
                    element: <ProductDetailsPage />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
};

export default Router;