import styles from "./IconMenu.module.css";
import { Link } from "react-router-dom";
import BAG_ICON from "../../assets/bag.svg";
import HEART from "../../assets/heart.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function IconMenu() {
    const [cartItems] = useContext(CartContext);

    return (
        <div>
            <ul className={styles.iconMenu}>
                <li>
                    <Link to="/registration">Rejestracja</Link>
                </li>
                <li>
                    <Link to="/login">Zaloguj</Link>
                </li>
                <li>
                    <Link to="/favorite">
                        <img src={HEART} alt="" />
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <img src={BAG_ICON} alt="" />
                        <div className={styles.numberOfProducts}>
                            {cartItems.length}
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
