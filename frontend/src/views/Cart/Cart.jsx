import { CartProductList } from "../../components/CartProductList/CartProductList";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";

export function Cart() {
    return (
        <FlexContainer>
            <CartProductList />
        </FlexContainer>
    );
}
