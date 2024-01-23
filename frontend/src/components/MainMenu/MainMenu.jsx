import styles from "./MainMenu.module.css";
import { NavLink } from "react-router-dom";
export function MainMenu() {
    return (
        <ul className={styles.mainMenu}>
            <li>
                <NavLink to={"/rakiety"}>Rakiety</NavLink>
            </li>
            <li>
                <NavLink to={"/obuwie"}>Obuwie</NavLink>
            </li>
        </ul>
    );
}
