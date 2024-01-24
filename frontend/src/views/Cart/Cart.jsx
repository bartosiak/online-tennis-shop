import { useContext } from "react";
import { CartProductList } from "../../components/CartProductList/CartProductList";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
    const [cartItems] = useContext(CartContext);
    return (
        <FlexContainer>
            <CartProductList products={cartItems} />
        </FlexContainer>
    );
}
