import styles from "./ErrorMessage.module.css";
export function ErrorMessage({ error }) {
    if (!error) {
        return null;
    }
    return <div className={styles.error}>{error?.message}</div>;
}
