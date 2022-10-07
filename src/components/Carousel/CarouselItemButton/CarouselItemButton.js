import "./CarouselItemButton.css";

function CarouselItemButton({ isActive }) {
    return (
        <div
            className={"carousel__item__button" + (isActive ? " active" : "")}
        ></div>
    );
}

export default CarouselItemButton;
