import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { FavouritesContext } from "../../contexts/FavouritesContext";
import { useContext } from "react";
export function Product({ product }) {
    const { addToFavourites } = useContext(FavouritesContext);
    return (
        <Link to={`/product-details/${product._id}`} className={styles.product}>
            <img src={`http://localhost:4000/${product.imagesUrl[0]}`} alt="" />

            <h3>{product.name}</h3>
            <h4>{product.brand}</h4>
            <p>{product.price}</p>
            <button onClick={() => addToFavourites(product)}>
                <div className={styles.heart}></div>
            </button>
        </Link>
    );
}
