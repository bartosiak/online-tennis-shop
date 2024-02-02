import styles from "./Product.module.css";
import { Link } from "react-router-dom";
export function Product({ product }) {
    console.log(
        `http://localhost:4000/${product.imagesUrl[0].replace(/\\/g, "/")}`
    );

    return (
        <Link to={`/product-details/${product._id}`} className={styles.product}>
            <img
                src={`http://localhost:4000/${product.imagesUrl[0].replace(
                    /\\/g,
                    "/"
                )}`}
                alt=""
            />

            <h3>{product.name}</h3>
            <h4>{product.brand}</h4>
            <p>{product.price}</p>
            <div className={styles.heart}></div>
        </Link>
    );
}
