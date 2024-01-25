import styles from "./Photos.module.css";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import { useState } from "react";

export function Photos({ product }) {
    const [currentPhoto, setCurrentPhoto] = useState(product.imagesUrl[0]);
    return (
        <FlexContainer>
            <div className={styles.thumbnails}>
                {product.imagesUrl.map((photo) => {
                    return (
                        <img
                            className={
                                currentPhoto === photo ? styles.active : ""
                            }
                            onClick={() => {
                                setCurrentPhoto(photo);
                            }}
                            key={photo}
                            src={photo}
                        />
                    );
                })}
            </div>
            <img className={styles.mainPhoto} src={currentPhoto} />
        </FlexContainer>
    );
}
