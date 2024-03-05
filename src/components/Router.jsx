import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx'
import ProductListPage from './ProductListPage.jsx'
import ProductDetailsPage from './ProductDetailsPage.jsx'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />
        },
        {
            path: 'productList',
            element: <ProductListPage />
        },
        {
            path: 'product/:id',
            element: <ProductDetailsPage />
        }
    ]);

    return <RouterProvider router={router} />;
};

export default Router;