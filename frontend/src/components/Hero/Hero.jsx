import Carousel from "../Carousel/Carousel";
import image1 from "../../assets/hero1.jpg";
import image2 from "../../assets/hero2.jpg";
import image3 from "../../assets/hero3.jpg";

export function Hero() {
    const images = [image1, image2, image3];
    return <Carousel images={images} />;
}
