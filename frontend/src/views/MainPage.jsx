import { Hero } from "../components/Hero/Hero";
import { ProductList } from "../components/ProductsList/ProductList";
import { Layout } from "../layout/Layout";

export function MainPage() {
    const products = [
        {
            _id: "65af9e71b94306e2d3ab0e60",
            name: "Rakieta tenisowa",
            price: 499,
            description: "Profesjonalna rakieta tenisowa",
            category: "Rakiety",
            brand: "Head",
            stockQuantity: 50,
            imagesUrl: ["http://localhost:4000/image1.jpg"],
            createdAt: "2024-01-23T11:09:37.944Z",
            updatedAt: "2024-01-23T11:09:37.944Z",
            __v: 0,
        },
        {
            _id: "65af9e71b94306e2d3ab0e60",
            name: "Rakieta tenisowa",
            price: 499,
            description: "Profesjonalna rakieta tenisowa",
            category: "Rakiety",
            brand: "Head",
            stockQuantity: 50,
            imagesUrl: ["http://localhost:4000/image2.jpg"],
            createdAt: "2024-01-23T11:09:37.944Z",
            updatedAt: "2024-01-23T11:09:37.944Z",
            __v: 0,
        },
        {
            _id: "65af9e71b94306e2d3ab0e60",
            name: "Rakieta tenisowa",
            price: 499,
            description: "Profesjonalna rakieta tenisowa",
            category: "Rakiety",
            brand: "Head",
            stockQuantity: 50,
            imagesUrl: ["http://localhost:4000/image3.jpg"],
            createdAt: "2024-01-23T11:09:37.944Z",
            updatedAt: "2024-01-23T11:09:37.944Z",
            __v: 0,
        },
        {
            _id: "65af9e71b94306e2d3ab0e60",
            name: "Rakieta tenisowa",
            price: 499,
            description: "Profesjonalna rakieta tenisowa",
            category: "Rakiety",
            brand: "Head",
            stockQuantity: 50,
            imagesUrl: ["http://localhost:4000/image1.jpg"],
            createdAt: "2024-01-23T11:09:37.944Z",
            updatedAt: "2024-01-23T11:09:37.944Z",
            __v: 0,
        },
    ];
    return (
        <Layout>
            <Hero />
            <ProductList products={products} />
        </Layout>
    );
}
