import styles from "./CenteredContent.module.css";
export function CenteredContent({ children, width }) {
    const widthClass = `width-${width}`;
    return (
        <div className={`${styles.wrapper} ${styles[widthClass]}`}>
            {children}
        </div>
    );
}
