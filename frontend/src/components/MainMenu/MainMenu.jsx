import styles from "./MainMenu.module.css";
import { NavLink } from "react-router-dom";
export function MainMenu() {
    return (
        <ul className={styles.mainMenu}>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/products/Rakiety"}>Rakiety</NavLink>
            </li>
            <li>
                <NavLink to={"/products/Obuwie"}>Obuwie</NavLink>
            </li>
        </ul>
    );
}
