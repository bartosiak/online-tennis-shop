import { useLoaderData } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { ProductList } from "../../components/ProductsList/ProductList";

export function MainPage() {
    const products = useLoaderData();
    return (
        <>
            <Hero />
            <ProductList products={products} />
        </>
    );
}
