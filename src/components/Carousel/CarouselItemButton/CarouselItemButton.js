import { triggerSlide } from "../CarouselFunctions/CarouselFunctions";
import "./CarouselItemButton.css";

function CarouselItemButton({ index, isActive, setSlideNumber, realSlideNumber }) {
    return (
        <div
            className={"carousel__item__button" + (isActive ? " active" : "")}
            key={"carousel__item__button__" + index}
            index={index}
            onClick={() => triggerSlide(setSlideNumber, realSlideNumber, index )}
        ></div>
    );
}

export default CarouselItemButton;
