import styles from "./CartProduct.module.css";
export function CartProduct({ product, handleDelete }) {
    return (
        <tr>
            <td className={styles.name}>
                <img className={styles.image} src={product.imagesUrl} alt="" />
            </td>
            <td className={styles.brand}>{product.brand}</td>
            <td className={styles.quanty}>{product.quantity}</td>
            <td className={styles.price}>{product.price}</td>
            <td className={styles.total}>{product.price * product.quantity}</td>
            <td className={styles.wrapperBtn}>
                <button
                    className={styles.btn}
                    onClick={() => handleDelete(product._id)}
                >
                    X
                </button>
            </td>
        </tr>
    );
}
