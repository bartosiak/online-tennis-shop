import { useEffect, useState } from "react";
import { FavouritesContext } from "./FavouritesContext";

export const FavouritesContextProvider = ({ children, userId }) => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        try {
            const storedFavourites =
                JSON.parse(localStorage.getItem(`favourites-${userId}`)) || [];
            setFavourites(storedFavourites);
        } catch (error) {
            console.error(
                "Failed to parse favourites from localStorage",
                error
            );
        }
    }, []);

    function addToFavourites(product) {
        setFavourites((prevFavourites) => {
            const updatedFavourites = [...prevFavourites, product];

            localStorage.setItem(
                `favourites-${userId}`,
                JSON.stringify(updatedFavourites)
            );

            return updatedFavourites;
        });
    }

    function removeFromFavourites(product) {
        setFavourites((prevFavourites) => {
            const updatedFavourites = prevFavourites.filter(
                (fav) => fav.id !== product.id
            );
            localStorage.setItem(
                `favourites-${userId}`,
                JSON.stringify(updatedFavourites)
            );
            return updatedFavourites;
        });
    }

    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                userId,
            }}
        >
            {children}
        </FavouritesContext.Provider>
    );
};
