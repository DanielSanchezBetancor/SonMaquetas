import "./CarouselItemButton.css";

function CarouselItemButton({ index, isActive, setSlideNumber }) {
    return (
        <div
            className={"carousel__item__button" + (isActive ? " active" : "")}
            key={"carousel__item__button__" + index}
            onClick={() => setSlideNumber(index)}
        ></div>
    );
}

export default CarouselItemButton;
