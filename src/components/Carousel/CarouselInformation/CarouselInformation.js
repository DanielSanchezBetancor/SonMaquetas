import "./CarouselInformation.css";

function CarouselInformation({ index, isActive, name, description }) {
    return (
        <div
            className={
                "carousel__information__wrapper" +
                (isActive === true ? " information-active" : "")
            }
            key={"carousel__information__wrapper__" + index}
        >
            <h1>{name}</h1>
            <h2 className="carousel__information__subheader">{description}</h2>
        </div>
    );
}

export default CarouselInformation;
