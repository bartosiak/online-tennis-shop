import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { FavouritesList } from "../../components/FavoritesList/FavoritesList";

export function OrderDetails() {
    const favouriteProducts = [
        {
            id: 1,
            productName: "Babolat Pure Strike",
            pricePLN: 200,
            priceUSD: 200,
            category: "Rakiety",
            subcategory: "Rakiety",
            brand: "Babolat",
            stockQuantity: 20,
            photos: ["http://localhost:3000/uploads/babolat-pure-strike.jpg"],
            description: "Rakieta tenisowa o wysokiej wydajności",
            maintenanceInfo: "Brak informacji o konserwacji",
        },
        {
            id: 2,
            productName: "Head Speed MP",
            pricePLN: 200,
            priceUSD: 200,
            category: "Rakiety",
            subcategory: "Rakiety",
            brand: "Head",
            stockQuantity: 50,
            photos: ["http://localhost:3000/uploads/head-speed-mp.jpg"],
            description: "Profesjonalna rakieta tenisowa",
            maintenanceInfo: "Brak informacji o konserwacji",
        },
    ];

    return (
        <FlexContainer>
            <FavouritesList products={favouriteProducts} />
        </FlexContainer>
    );
}
