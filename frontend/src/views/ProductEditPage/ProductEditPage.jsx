import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ProductEditForm } from "../../components/ProductEditForm/ProductEditForm";
import { useParams } from "react-router-dom"

export function ProductEditPage() {
    const { id } = useParams()
    return (
        <FlexContainer>
            <ProductEditForm productId={id}/>
        </FlexContainer>
    );
}
