import styles from "./Button.module.css";
export function Button({ children, onClick, type, disabled }) {
    const handleClick = (e) => {
        console.log("Button clicked!");
        if (onClick) {
            onClick(e);
            console.log()
        }
    };
    return (
        <button
            type={type}
            disabled={disabled}
            className={styles.button}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
