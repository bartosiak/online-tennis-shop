import "./styles/theme.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage.jsx";
import { ProductDetails } from "./views/ProductDetails/ProductDetails.jsx";

const router = createBrowserRouter([
    { path: "/", element: <MainPage /> },
    { path: "/product-details", element: <ProductDetails /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
