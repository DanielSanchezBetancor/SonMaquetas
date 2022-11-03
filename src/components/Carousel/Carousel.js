import { useEffect, useState } from "react";
import { getData } from "../../utils/Utils";
import {
    calculateButtons,
    calculatePrices,
    calculateInformation,
    calculateImages,
    calculateSlide
} from "./CarouselFunctions/CarouselFunctions";
import { calculateRandoms } from '../../utils/Utils';
import "./Carousel.css";
import ImgBackground from "../../assets/My path.svg";

function Carousel() {
    const [slideNumber, setSlideNumber] = useState(1);
    const [itemButtons, setItemButtons] = useState(false);
    const [prices, setPrices] = useState(false);
    const [information, setInformation] = useState(false);
    const [carouselImage, setCarouselImage] = useState(false);
    function onScroll(event) {
        calculateSlide(event.target.scrollLeft, slideNumber, setSlideNumber);
    }
    useEffect(() => {
        const data = getData();
        let randoms = calculateRandoms(data.products.length);
        setItemButtons(calculateButtons(setSlideNumber));
        setPrices(calculatePrices(data.products, randoms));
        setInformation(calculateInformation(data.products, randoms));
        setCarouselImage(calculateImages(data.products, randoms));

    }, []);

    return (
        <section className="carousel">
            <div className="carousel__item-button">
                {itemButtons ? itemButtons : ""}
            </div>
            <div className="carousel__price__wrapper">
                {prices ? prices : ""}
            </div>
            <div className="carousel__wrapper">
                <div className="carousel__information">
                    {information ? information : ""}
                </div>
                <img
                    className="carousel__sliders__background"
                    src={ImgBackground}
                    alt=""
                />
                <div className="carousel__sliders" onScroll={onScroll}>
                    {carouselImage
                        ? carouselImage 
                        : ""}
                </div>
            </div>
        </section>
    );
}

export default Carousel;
