import styles from "./Product.module.css";
import { Link } from "react-router-dom";
export function Product({ product }) {
    return (
        <Link className={styles.product}>
            <img src={product.imagesUrl} alt="" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className={styles.heart}></div>
        </Link>
    );
}
