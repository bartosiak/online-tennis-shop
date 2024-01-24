import { CardProduct } from "../CardProduct/CardProduct";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import styles from "./CartProductList.module.css";

export function CartProductList() {
    const products = [
        {
            _id: "65af9e84b94306e2d3ab0e64",
            name: "Rakieta tenisowa",
            price: 499,
            description: "Profesjonalna rakieta tenisowa",
            category: "Rakiety",
            brand: "Babolat",
            stockQuantity: 50,
            imagesUrl: ["http://localhost:4000/image4.jpg"],
            createdAt: {
                $date: "2024-01-23T11:09:56.027Z",
            },
            updatedAt: {
                $date: "2024-01-23T11:09:56.027Z",
            },
        },
        {
            _id: "65af9e84b94306e2d3ab0e65",
            name: "Rakieta tenisowa",
            price: 499,
            description: "Profesjonalna rakieta tenisowa",
            category: "Rakiety",
            brand: "Babolat",
            stockQuantity: 50,
            imagesUrl: ["http://localhost:4000/image4.jpg"],
            createdAt: {
                $date: "2024-01-23T11:09:56.027Z",
            },
            updatedAt: {
                $date: "2024-01-23T11:09:56.027Z",
            },
        },
    ];
    return (
        <CenteredContent>
            <div className={styles.wrapper}>
                <div className={styles.holder}>
                    <table className={styles.table}>
                        <caption>Koszyk</caption>
                        <thead>
                            <tr className={styles.tableHead}>
                                <th></th>
                                <th>Marka</th>
                                <th>Ilość</th>
                                <th>Cena za jednostkę</th>
                                <th>Suma</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <CardProduct
                                    key={product._id}
                                    product={product}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </CenteredContent>
    );
}
