import CategoryCard from '../CategoryCard/CategoryCard.js';
import "./CategoriesCardList.css";
import categoriesPlanes from "../../assets/categories-plane.png";
import categoriesVehicles from "../../assets/categories-vehicles.png";
import categoriesTrain from "../../assets/categories-train.png";
import categoriesShip from "../../assets/categories-ship.png";

function CategoriesCardList() {
    return (
        <section className='categories-card'>
            <CategoryCard categoryImg={categoriesVehicles} categoryName="Automoción" />
            <CategoryCard categoryImg={categoriesTrain} categoryName="Trenes" />
            <CategoryCard categoryImg={categoriesShip} categoryName="Naútica" />
            <CategoryCard categoryImg={categoriesPlanes} categoryName="Aviación" />
        </section>
    )
}

export default CategoriesCardList;