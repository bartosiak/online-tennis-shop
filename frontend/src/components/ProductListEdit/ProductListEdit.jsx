import styles from "./ProductListEdit.module.css";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export function ProductListEdit({ products }) {
    return (
        <>
            <h2 className={styles.productHeader}>Lista wszystkich produktów</h2>
            <table className={styles.productsTable}>
                <thead className={styles.thead}>
                    <tr>
                        <th>Numer</th>
                        <th>Zdjęcie</th>
                        <th>Nazwa</th>
                        <th>Marka</th>
                        <th>Ilość na stanie</th>
                        <th className={styles.theadAction}>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product._id} className={styles.tableheight}>
                            <td>{index}</td>
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
                                <div className={styles.buttonGroup}>
                                    <Button className={styles.editButton}>
                                        Edytuj
                                    </Button>
                                    <Button color="#c60c0c">Usuń</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
