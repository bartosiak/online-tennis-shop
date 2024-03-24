import styles from "./Product.module.css";
import { Link, useFetcher } from "react-router-dom";
export function Product({ product }) {
    const { Form } = useFetcher();
    return (
        <Link to={`/product-details/${product._id}`} className={styles.product}>
            <img src={`http://localhost:4000/${product.imagesUrl[0]}`} alt="" />

            <h3>{product.name}</h3>
            <h4>{product.brand}</h4>
            <p>{product.price}</p>
            <Form
                onClick={(e) => {
                    e.stopPropagation();
                }}
                method="POST"
                action={`/add-to-favourites/${product._id}`}
            >
                <button>
                    <div className={styles.heart}></div>
                </button>
            </Form>
        </Link>
    );
}
