import styles from "./CartProduct.module.css";
export function CartProduct({ product, handleDelete, updateQuantity }) {
    return (
        <tr>
            <td className={styles.name}>
                <img className={styles.image} src={product.imagesUrl} alt="" />
            </td>
            <td className={styles.brand}>{product.brand}</td>
            <td className={styles.quanty}>
                <input
                    className={styles.inputQuanty}
                    type="number"
                    value={product.quantity}
                    min="1"
                    onChange={(e) =>
                        updateQuantity(product._id, e.target.value)
                    }
                />
            </td>
            <td className={styles.price}>{product.price} zł</td>
            <td className={styles.total}>
                {product.price * product.quantity} zł
            </td>
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
