import styles from "./ProductListEdit.module.css";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export function ProductListEdit({ products }) {
    return (
        <>
            <h2 className={styles.productHeader}>Szeroki wybór</h2>
            <table className={styles.productsTable}>
                <thead className={styles.thead}>
                    <tr>
                        <th>Zdjęcie</th>
                        <th>Nazwa</th>
                        <th>Marka</th>
                        <th>Ilość na stanie</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>
                                <Link to={`/product-details/${product._id}`}>
                                    <img
                                        src={`http://localhost:4000/${product.imagesUrl[0].replace(
                                            /\\/g,
                                            "/"
                                        )}`}
                                        alt={product.name}
                                        className={styles.thumbnail}
                                    />
                                </Link>
                            </td>
                            <td>{product.name}</td>
                            <td>{product.brand}</td>
                            <td>{product.stockQuantity}</td>
                            <td>
                                <Button className={styles.editButton}>
                                    Edytuj
                                </Button>
                                <Button color="#bc4b51">Usuń</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
