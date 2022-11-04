import "./CarouselInformation.css";

function CarouselInformation({ index, isActive, name, description, url }) {
    return (
        <div
            className={
                "carousel__information" +
                (isActive === true ? " information-active" : "")
            }
            key={"carousel__information__" + index}
        >
            <h1>{name}</h1>
            <h2 className="carousel__information__subheader">{description}</h2>
            <div className="carousel__information__button__wrapper">
                <button className="carousel__item__description__button">
                    <a href={url}> Ir al producto</a>
                </button>
            </div>
        </div>
    );
}

export default CarouselInformation;
