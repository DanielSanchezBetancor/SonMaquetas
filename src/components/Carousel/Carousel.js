import CarouselItem from "./CarouselItem/CarouselItem.js";
import CarouselItemButton from "./CarouselItemButton/CarouselItemButton.js";
import CarouselImage from "./CarouselImage/CarouselImage.js";
import { useState } from "react";
import {
    logicNextSlide,
    logicPrevSlide,
} from "./CarouselFunctions/CarouselFunctions.js";
import "./Carousel.css";

function Carousel({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [heightNextSlide, setHeightNextSlide] = useState(0);

    function scrollingAction(event) {
        logicNextSlide(
            event.target.children[currentSlide],
            event.target.scrollTop,
            heightNextSlide,
            currentSlide,
            setCurrentSlide,
            setHeightNextSlide
        );
        logicPrevSlide(
            event.target.children[currentSlide - 1],
            event.target.scrollTop,
            heightNextSlide,
            currentSlide,
            setCurrentSlide,
            setHeightNextSlide
        );
    }

    return (
        <section className="carousel dflex-col-cent">
            {/* Carousel navigation buttons */}
            <div className="carousel__controls">
                {images.map((image, index) => {
                    return (
                        <CarouselItemButton
                            isActive={index === 0 ? true : false}
                        />
                    );
                })}
            </div>
            {/* Carousel product information */}
            <div className="carousel__product dflex-col-cent">
                {images.map((image, index) => {
                    return (
                        <CarouselItem
                            id={index + 1}
                            show={index === 0 ? true : false}
                        />
                    );
                })}
            </div>
            {/* <CarouselImages /> */}
            <div className="carousel__slider" onScroll={scrollingAction}>
                {images.map((image) => {
                    return <CarouselImage image={image} />;
                })}
            </div>
        </section>
    );
}

export default Carousel;
