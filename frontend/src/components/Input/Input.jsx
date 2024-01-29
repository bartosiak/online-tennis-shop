import styles from "./Input.module.css";
export function Input({ register, name, placeholder, type = "text" }) {
    placeholder = placeholder || name;
    return (
        <input
            className={styles.input}
            {...register?.(name)}
            type={type}
            placeholder={placeholder}
        />
    );
}
