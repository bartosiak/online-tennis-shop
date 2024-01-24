import "./styles/theme.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage.jsx";
import { ProductDetails } from "./views/ProductDetails/ProductDetails.jsx";
import { Layout } from "./layout/Layout.jsx";
import { Cart } from "./views/Cart/Cart.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/home",
                element: <MainPage />,
                loader: () => {
                    return fetch("http://localhost:4000/products");
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
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
