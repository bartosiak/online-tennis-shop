import { useLoaderData } from "react-router-dom";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { Products } from "../../components/Products/Product";

export function ProductList() {
    const products = useLoaderData();
    return (
        <CenteredContent>
            <Products products={products} />
        </CenteredContent>
    );
}
