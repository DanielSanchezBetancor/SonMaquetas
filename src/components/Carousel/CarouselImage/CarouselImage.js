import "./CarouselImage.css";

function CarouselImage({ image }) {
    return (
        <div className="carousel__image">
            <img src={image} alt="" />
        </div>
    );
}

export default CarouselImage;
