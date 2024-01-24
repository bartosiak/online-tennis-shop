import styles from "./CardProduct.module.css";
export function CardProduct({ product }) {
    return (
        <tr>
            <td className={styles.name}>
                <img className={styles.image} src={product.imagesUrl} alt="" />
            </td>
            <td className={styles.bran}>{product.brand}</td>
            <td className={styles.quanty}>{product.stockQuantity}</td>
            <td className={styles.price}>{product.price}</td>
            <td className={styles.total}>{product.price}</td>
        </tr>
    );
}
