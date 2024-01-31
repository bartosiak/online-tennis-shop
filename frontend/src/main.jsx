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

const router = createBrowserRouter([
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
                path: "/registration",
                element: <RegistrationPage />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/add-product",
                element: <ProductAddPage />,
            },
            {
                path: "/edit-product/:id",
                element: <ProductEditPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
