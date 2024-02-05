import { useLoaderData } from "react-router-dom";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { ProductListEdit } from "../../components/ProductListEdit/ProductListEdit";

export function ProductListAdmin() {
    const products = useLoaderData();
    return (
        <CenteredContent width={"100"}>
            <ProductListEdit initialProducts={products} />
        </CenteredContent>
    );
}
