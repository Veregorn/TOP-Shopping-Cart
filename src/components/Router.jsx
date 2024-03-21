import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from './HomePage.jsx'
import ErrorPage from './ErrorPage.jsx'
import ProductListPage from './ProductListPage.jsx'
import ProductDetailsPage from './ProductDetailsPage.jsx'
import CartPage from './CartPage.jsx'
import { useState } from 'react'

const Router = () => {

    const [cart, setCart] = useState({})
    const [numOfProductsInCart, setNumOfProductsInCart] = useState(0)

    const addToCart = (product) => {
        const newCart = { ...cart }
        if (newCart[product.id] === undefined) {
            newCart[product.id] = { ...product, quantity: 1 }
        } else {
            newCart[product.id].quantity++
        }
        setCart(newCart)
        setNumOfProductsInCart(numOfProductsInCart + 1)
    }

    const deleteFromCart = (productId) => {
        const newCart = { ...cart }
        const quantity = newCart[productId].quantity
        delete newCart[productId]
        setCart(newCart)
        setNumOfProductsInCart(numOfProductsInCart - quantity)
    }

    const increaseQuantity = (productId) => {
        const newCart = { ...cart }
        newCart[productId].quantity++
        setCart(newCart)
        setNumOfProductsInCart(numOfProductsInCart + 1)
    }

    const decreaseQuantity = (productId) => {
        const newCart = { ...cart }
        if (newCart[productId].quantity === 1) {
            delete newCart[productId]
        } else {
            newCart[productId].quantity--
        }
        setCart(newCart)
        setNumOfProductsInCart(numOfProductsInCart - 1)
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout numOfProductsInCart={numOfProductsInCart} />,
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
                    element: <ProductDetailsPage addToCartHandler={addToCart} />
                },
                {
                    path: 'cart',
                    element: <CartPage cart={cart} minusAction={decreaseQuantity} plusAction={increaseQuantity} crossAction={deleteFromCart} />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
};

export default Router;