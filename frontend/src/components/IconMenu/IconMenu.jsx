import { useState, useContext, useEffect, useRef } from "react";
import styles from "./IconMenu.module.css";
import { Link } from "react-router-dom";
import BAG_ICON from "../../assets/bag.svg";
import HEART from "../../assets/heart.svg";
import USER from "../../assets/user.svg";
import { CartContext } from "../../contexts/CartContext";
import Cookies from "js-cookie";
import { Button } from "../Button/Button";

export function IconMenu() {
    const [cartItems] = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const node = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (node.current && !node.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const token = Cookies.get("token");
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [isOpen]);

    function handleLogoutClick() {
        Cookies.remove("token");
        setIsOpen(false);
    }

    return (
        <div>
            <ul className={styles.iconMenu}>
                <li className={styles.accordionContainer}>
                    <button
                        className={styles.accordionIcon}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <img className={styles.user} src={USER} alt="" />
                    </button>
                    {isOpen && (
                        <ul ref={node} className={styles.accordion}>
                            <li>
                                <Button>
                                    {isLoggedIn ? (
                                        <Link
                                            className={styles.btnLogin}
                                            to="/"
                                            onClick={handleLogoutClick}
                                        >
                                            Wyloguj
                                        </Link>
                                    ) : (
                                        <Link
                                            className={styles.btnLogin}
                                            to="/login"
                                        >
                                            Zaloguj
                                        </Link>
                                    )}
                                </Button>
                            </li>
                            <li>
                                <Link
                                    className={styles.registration}
                                    to="/registration"
                                >
                                    lub{" "}
                                    <span className={styles.registrationSpan}>
                                        zarejestruj się
                                    </span>
                                </Link>
                            </li>
                            {isLoggedIn && (
                                <li className={styles.addProduct}>
                                    <Link to="/add-product">Dodaj produkt</Link>
                                </li>
                            )}
                        </ul>
                    )}
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
