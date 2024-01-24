import { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };
    return (
        <div className={styles.container}>
            <img src={images[currentIndex]} alt="" />
            <button
                className={`${styles.btn} ${styles.btnPrev}`}
                onClick={handlePrev}
            >
                ◀
            </button>
            <button
                className={`${styles.btn} ${styles.btnNext}`}
                onClick={handleNext}
            >
                ▶
            </button>
            <div className={styles.indicators}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={styles.indicator}
                        onClick={() => handleIndicatorClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
