import styles from "./Photos.module.css";
import { useState } from "react";

export function Photos({ product }) {
    const [currentPhoto, setCurrentPhoto] = useState(
        `http://localhost:4000${product.imagesUrl[0]}`
    );
    return (
        <div className={styles.photoContainer}>
            <div className={styles.thumbnails}>
                {product.imagesUrl.map((photo) => {
                    const photoUrl = `http://localhost:4000${photo}`;
                    return (
                        <img
                            className={
                                currentPhoto === photoUrl ? styles.active : ""
                            }
                            onClick={() => {
                                setCurrentPhoto(photo);
                            }}
                            key={photo}
                            src={photoUrl}
                        />
                    );
                })}
            </div>
            <img className={styles.mainPhoto} src={currentPhoto} />
        </div>
    );
}
