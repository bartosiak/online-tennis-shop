import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { IconMenu } from "../components/IconMenu/IconMenu";
import { Logo } from "../components/Logo/Logo";
import { MainContent } from "../components/MainContent/MainContent";
import { MainMenu } from "../components/MainMenu/MainMenu";
import { TopBar } from "../components/TopBar/TopBar";
import { CartContext } from "../contexts/CartContext";
import { useState } from "react";

export function Layout() {
    const [cartItems, setCartItems] = useState(() => {
        return localStorage["cart_products"]
            ? JSON.parse(localStorage["cart_products"])
            : [];
    });

    function addProductToCart(product) {
        setCartItems((previousCartItems) => {
            const newState = [...previousCartItems, product];
            localStorage["cart_products"] = JSON.stringify(newState);
            return newState;
        });
    }
    return (
        <>
            <CartContext.Provider value={[cartItems, addProductToCart]}>
                <MainContent>
                    <TopBar>
                        <MainMenu />
                        <Logo />
                        <IconMenu />
                    </TopBar>
                    <Outlet />
                </MainContent>
                <Footer />
            </CartContext.Provider>
        </>
    );
}
