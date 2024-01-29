import styles from "./CenteredContent.module.css";
export function CenteredContent({ children, width }) {
    const widthClass = `width-${width}`;
    console.log(widthClass);
    return (
        <div className={`${styles.wrapper} ${styles[widthClass]}`}>
            {children}
        </div>
    );
}
