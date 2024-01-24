import styles from "./Details.module.css";

import CAR_ICON from "../../assets/car.svg";
import RETURN_ICON from "../../assets/return.svg";

export function Details({ product }) {
    return (
        <div className={styles.details}>
            <h2>{product.brand}</h2>
            <p className={styles.productName}>{product.name}</p>
            <p className={styles.price}>{product.price}zł</p>
            <p>{product.description}</p>

            <button>Dodaj do koszyka</button>

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