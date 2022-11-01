import { useState } from "react";
import ShipImg from "../../assets/categories-ship.png";
import ImgBackground from "../../assets/My path.svg";
import "./Carousel.css";

function Carousel() {
    const [slideNumber, setSlideNumber] = useState(1);
    function onScroll(event) {
        //Total width determined by user width
        const totalWidth =
            document.querySelector(".carousel__sliders").clientWidth;
        //Adding a little space on right so it doesnt trigger so fast
        const triggerNextSlideWidth = totalWidth * slideNumber - 50;
        //Adding a little space on left so it doesnt trigger so fast
        const triggerPreviousSlideWidth = totalWidth * (slideNumber - 1) - 100;
        if (event.target.scrollLeft > triggerNextSlideWidth) {
            triggerSlide(1);
        }
        //iPhones have a weird extra scroll that can trigger this function on the first slide like there was another behind
        if (
            slideNumber > 1 &&
            event.target.scrollLeft < triggerPreviousSlideWidth
        ) {
            triggerSlide(-1);
        }
    }
    function triggerSlide(counter) {
        hideAndShowComponents(
            ".carousel__information__wrapper",
            "information-active",
            counter
        );
        hideAndShowComponents(
            ".carousel__slider-buttons__button",
            "active",
            counter
        );
        hideAndShowComponents(".carousel__price", "price-active", counter);
        setSlideNumber(slideNumber + counter);
    }
    function hideAndShowComponents(targetClassName, auxiliarClass, counter) {
        //We setted slideNumber as 1, but for index we need 0
        const correctIndex = slideNumber - 1;
        //Selecting all components from the same class
        const componentList = document.querySelectorAll(targetClassName);
        //Removing auxiliar class name from active slide
        componentList[correctIndex].classList.remove(auxiliarClass);
        //Adding auxiliar class name for next/previous slide
        componentList[correctIndex + counter].classList.add(auxiliarClass);
    }
    return (
        <section className="carousel">
            <div className="carousel__slider-buttons">
                <div className="carousel__slider-buttons__button active"></div>
                <div className="carousel__slider-buttons__button"></div>
                <div className="carousel__slider-buttons__button"></div>
            </div>
            <div className="carousel__price__wrapper">
                <div className="carousel__price price-active">1.50€</div>
                <div className="carousel__price">¥17665,43</div>
                <div className="carousel__price">19102022€</div>
            </div>
            <div className="carouse__wrapper">
                <div className="carousel__information">
                    <div className="carousel__information__wrapper information-active">
                        <h1>Barco de Playmobil</h1>
                        <h2 className="carousel__information__subheader">
                            Ideal para un pibito chico
                        </h2>
                    </div>
                    <div className="carousel__information__wrapper">
                        <h1>Barco del chino</h1>
                        <h2 className="carousel__information__subheader">
                            這艘船都很漂亮
                        </h2>
                    </div>
                    <div className="carousel__information__wrapper">
                        <h1>Barco de Noé de cuando se inundó la Tierra</h1>
                        <h2 className="carousel__information__subheader">
                            En este barco pueden caber, <b>como minimo</b>, 2 de
                            las 2 millones de especies en la Tierra en cualquier
                            momento. JURADO.
                        </h2>
                    </div>
                </div>

                <img
                    className="carousel__sliders__background"
                    src={ImgBackground}
                    alt=""
                />
                <div className="carousel__sliders" onScroll={onScroll}>
                    <img
                        className="carousel__sliders__slider"
                        src={ShipImg}
                        alt=""
                    />
                    <img
                        className="carousel__sliders__slider"
                        src={ShipImg}
                        alt=""
                    />
                    <img
                        className="carousel__sliders__slider"
                        src={ShipImg}
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
}

export default Carousel;
