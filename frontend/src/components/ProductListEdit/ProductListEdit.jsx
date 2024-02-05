import styles from "./ProductListEdit.module.css";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import Cookies from "js-cookie";
import { useState } from "react";

export function ProductListEdit({ initialProducts }) {
    const [products, setProducts] = useState(initialProducts);
    const deleteProduct = async (id) => {
        try {
            const token = Cookies.get("token");
            const response = await fetch(
                `http://localhost:4000/products/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: token,
                    },
                }
            );

            if (response.ok) {
                setProducts(products.filter((product) => product._id !== id));
            } else {
                console.error("Error:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <h2 className={styles.productHeader}>Lista wszystkich produktów</h2>
            <table className={styles.productsTable}>
                <thead className={styles.thead}>
                    <tr>
                        <th className={styles.th}>Numer</th>
                        <th className={styles.th}>Zdjęcie</th>
                        <th className={styles.th}>Nazwa</th>
                        <th className={styles.th}>Marka</th>
                        <th className={styles.th}>Ilość na stanie</th>
                        <th className={styles.th}>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product._id} className={styles.tableTd}>
                            <td className={styles.td}>{index + 1}</td>
                            <td className={styles.td}>
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

                            <td className={styles.td}>{product.name}</td>
                            <td className={styles.td}>{product.brand}</td>
                            <td
                                className={`${styles.td} ${styles.stockQuantity}`}
                            >
                                {product.stockQuantity}
                            </td>
                            <td className={`${styles.td} ${styles.actionBody}`}>
                                <div className={styles.buttonGroup}>
                                    <Button className={styles.editButton}>
                                        <Link
                                            className={styles.btnEdit}
                                            to={`/edit-product/${product._id}`}
                                        >
                                            Edytuj
                                        </Link>
                                    </Button>
                                    <Button
                                        className={styles.deleteButton}
                                        color="#c60c0c"
                                        onClick={() => {
                                            deleteProduct(product._id);
                                        }}
                                    >
                                        Usuń
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
