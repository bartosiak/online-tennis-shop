import styles from "./Button.module.css";
export function Button({ children, onClick, type, disabled, color }) {
    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
        }
    };
    return (
        <button
            type={type}
            disabled={disabled}
            className={styles.button}
            onClick={handleClick}
            style={{ backgroundColor: color }}
        >
            {children}
        </button>
    );
}
