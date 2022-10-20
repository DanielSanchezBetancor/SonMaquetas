import CategoryCardList from '../CategoryCardList/CategoryCardList';
import AccessoriesGrid from '../AccessoriesGrid/AccessoriesGrid';
import AddedValueCard from '../AddedValueCard/AddedValueCard';
import HeroPage from '../HeroPage/HeroPage';
/* Carousel images */
import Carousel from '../Carousel/Carousel.js';
import PlanesImg from "../../assets/categories-plane.png";
import ShipImg from "../../assets/categories-ship.png";
import TrainImg from "../../assets/categories-train.png";

function Content() {
    return (
        <>
            <HeroPage />
            <CategoryCardList />
            <Carousel images={[PlanesImg, ShipImg, TrainImg]}/>
            <AccessoriesGrid />
            <AddedValueCard />
        </>
    )
}

export default Content;