import styles from "./IconMenu.module.css";
import { Link } from "react-router-dom";
import BAG_ICON from "../../assets/bag.svg";
import HEART from "../../assets/heart.svg";

export function IconMenu() {
    const cartItems = 2;
    return (
        <div>
            <ul className={styles.iconMenu}>
                <li>
                    <Link to="/favorite">
                        <img src={HEART} alt="" />
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <img src={BAG_ICON} alt="" />
                        <div className={styles.numberOfProducts}>
                            {cartItems}
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
