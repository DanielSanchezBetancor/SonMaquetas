import { triggerSlide } from "../CarouselFunctions/CarouselFunctions";
import "./CarouselItemButton.css";

function CarouselItemButton({ index, isActive, setSlideNumber }) {
    return (
        <div
            className={"carousel__item__button" + (isActive ? " active" : "")}
            key={"carousel__item__button__" + index}
            index={index}
            onClick={() => triggerSlide(setSlideNumber, -1, index )}
        ></div>
    );
}

export default CarouselItemButton;
