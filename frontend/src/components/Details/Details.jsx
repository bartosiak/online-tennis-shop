import styles from "./Details.module.css";

import CAR_ICON from "../../assets/car.svg";
import RETURN_ICON from "../../assets/return.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Details({ product }) {
    const [, addProductToCart] = useContext(CartContext);

    return (
        <div className={styles.details}>
            <h2>{product.brand}</h2>
            <p className={styles.productName}>{product.name}</p>
            <p className={styles.price}>{product.price}zł</p>
            <p>{product.description}</p>

            <button
                onClick={() => {
                    addProductToCart(product);
                }}
            >
                Dodaj do koszyka
            </button>

            <ul className={styles.extraInfo}>
                <li>
                    <img src={CAR_ICON} />
                    Wysyłka do 24h
                </li>
                <li>
                    <img src={RETURN_ICON} />
                    Zwrot do 30 dni!
                </li>
            </ul>
        </div>
    );
}
