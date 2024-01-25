import { useLoaderData } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { Products } from "../../components/Products/Product";

export function MainPage() {
    const products = useLoaderData();
    return (
        <>
            <Hero />
            <Products products={products} />
        </>
    );
}
