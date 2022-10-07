import CategoriesCardList from '../CategoriesCardList/CategoriesCardList';
import AccessoriesGrid from '../AccessoriesGrid/AccessoriesGrid';
import AddedValueCard from '../AddedValueCard/AddedValueCard.js';
import Carousel from '../Carousel/Carousel.js';
import PlanesImg from "../../assets/categories-plane.png";
import ShipImg from "../../assets/categories-ship.png";
import TrainImg from "../../assets/categories-train.png";

function Content() {
    return (
        <>
            <Carousel images={[PlanesImg, ShipImg, TrainImg]}/>
            <CategoriesCardList />
            <AccessoriesGrid />
            <AddedValueCard />
        </>
    )
}

export default Content;