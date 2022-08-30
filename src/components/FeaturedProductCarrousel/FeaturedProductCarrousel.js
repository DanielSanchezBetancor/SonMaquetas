import Carousel from "better-react-carousel";
import CarrouselItem from "../CarrouselItem/CarrouselItem.js";
import "./FeaturedProductCarrousel.css";
import categoriesVehicles from "../../assets/categories-vehicles.png";
import categoriesPlanes from "../../assets/categories-plane.png";

function FeaturedProductCarrousel() {

    return (
        <section>
            {/* <Carousel
                cols={1}
                rows={1}
                gap={10}
                showDots={true}
                containerClassName={"carrousel"}
                loop
            >
                <Carousel.Item>
                    <CarrouselItem imgSrc={categoriesVehicles} id="1" />
                </Carousel.Item>
                <Carousel.Item>
                    <CarrouselItem imgSrc={categoriesPlanes} id="2" />
                </Carousel.Item>
                <Carousel.Item>
                    <CarrouselItem imgSrc={categoriesPlanes} id="3" />
                </Carousel.Item>
                <Carousel.Item>
                    <CarrouselItem imgSrc={categoriesPlanes} id="4" />
                </Carousel.Item>
            </Carousel> */}
            <Carousel
                showDots={true}
                containerClassName={"carousel"}
            >
                <Carousel.Item>
                    <CarrouselItem imgSrc={categoriesVehicles} id="1" />
                </Carousel.Item>
                <Carousel.Item>
                    <CarrouselItem imgSrc={categoriesPlanes} id="2" />
                </Carousel.Item>
                <Carousel.Item>
                    <CarrouselItem imgSrc={categoriesPlanes} id="3" />
                </Carousel.Item>
                <Carousel.Item>
                    <CarrouselItem imgSrc={categoriesPlanes} id="4" />
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default FeaturedProductCarrousel;
