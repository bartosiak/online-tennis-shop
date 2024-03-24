import "./styles/theme.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage.jsx";
import { ProductDetails } from "./views/ProductDetails/ProductDetails.jsx";
import { Layout } from "./layout/Layout.jsx";
import { Cart } from "./views/Cart/Cart.jsx";
import { ProductList } from "./views/ProductList/ProductList.jsx";
import { createOrder } from "./components/OrderDetailsForm/OrderDetailsForm.jsx";
import { OrderDetails } from "./views/OrderDetails/OrderDetails.jsx";
import { RegistrationPage } from "./views/RegistrationPage/RegistrationPage.jsx";
import { Login } from "./views/Login/Login.jsx";
import { ProductAddPage } from "./views/ProductAddPage/ProductAddPage.jsx";
import { ProductEditPage } from "./views/ProductEditPage/ProductEditPage.jsx";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.jsx";
import { ProductListAdmin } from "./views/ProductListAdmin/ProductListAdmin.jsx";
import { Favourites } from "./views/Favourites/Favourites.jsx";
import { addProductToFavourites } from "./api/addProductToFavouritesAction.js";

const router = createBrowserRouter([
    {
        path: "/add-to-favourites/:id",
        action: addProductToFavourites,
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainPage />,
                loader: () => {
                    return fetch("http://localhost:4000/products");
                },
            },
            {
                path: "/products/category/:category",
                element: <ProductList />,
                loader: ({ params }) => {
                    return fetch(
                        `http://localhost:4000/products/category/${params.category}`
                    );
                },
            },
            {
                path: "/product-details/:id",
                element: <ProductDetails />,
                loader: ({ params }) => {
                    return fetch(`http://localhost:4000/products/${params.id}`);
                },
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/order-details",
                action: createOrder,
                element: <OrderDetails />,
            },
            {
                path: "/favourites",
                element: <Favourites />,
            },
            {
                path: "/registration",
                element: <RegistrationPage />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/add-product",
                element: (
                    <PrivateRoute>
                        <ProductAddPage />
                    </PrivateRoute>
                ),
            },
            {
                path: "/edit-product/:id",
                element: (
                    <PrivateRoute>
                        <ProductEditPage />
                    </PrivateRoute>
                ),
            },
            {
                path: "/products",
                element: (
                    <PrivateRoute>
                        <ProductListAdmin />
                    </PrivateRoute>
                ),
                loader: () => {
                    return fetch("http://localhost:4000/products");
                },
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
