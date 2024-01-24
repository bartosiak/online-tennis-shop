import { useLoaderData } from "react-router-dom";
import { Details } from "../../components/Details/Details";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { Photos } from "../../components/Photos/Photos";

export function ProductDetails() {
    const product = useLoaderData();
    return (
        <FlexContainer>
            <Photos product={product} />
            <Details product={product} />
        </FlexContainer>
    );
}
