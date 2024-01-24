import styles from "./Product.module.css";
import { Link } from "react-router-dom";
export function Product({ product }) {
    return (
        <Link to={`/product-details/${product._id}`} className={styles.product}>
            <img src={product.imagesUrl} alt="" />
            <h3>{product.name}</h3>
            <h4>{product.brand}</h4>
            <p>{product.price}</p>
            <div className={styles.heart}></div>
        </Link>
    );
}
