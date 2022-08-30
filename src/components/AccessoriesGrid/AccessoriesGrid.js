import './AccessoriesGrid.css';
import CategoryCard from '../CategoryCard/CategoryCard';
import categoriesPlanes from "../../assets/categories-plane.png";
import categoriesVehicles from "../../assets/categories-vehicles.png";
import categoriesTrain from "../../assets/categories-train.png";
import categoriesShip from "../../assets/categories-ship.png";

function AccessoriesGrid() {
    return (
        <section>
            {/* <div className="grid grid-accesories-two-one">
                <CategoryCard categoryImg={categoriesPlanes} categoryName="Accesorio 1" />
                <CategoryCard categoryImg={categoriesVehicles} categoryName="Accesorio 2" />
            </div>
            <div className='grid grid-accesories-one-two'>
                <CategoryCard categoryImg={categoriesTrain} categoryName="Accesorio 3" />
                <CategoryCard categoryImg={categoriesShip} categoryName="Accesorio 4" />
            </div> */}
        </section>
    );
}

export default AccessoriesGrid;