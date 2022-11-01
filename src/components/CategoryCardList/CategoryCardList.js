import { useState } from "react";
import PlanesImg from "../../assets/categories-plane.png";

import CategoryCardListItem from "./CategoryCardListItem/CategoryCardListItem";
import "./CategoryCardList.css";

function CategoryCardList() {
    //Setting 4 images as default
    const [categoriesCardList, setCategoriesCardList] = useState([
        <CategoryCardListItem imgSrc={PlanesImg} />,
        <CategoryCardListItem imgSrc={PlanesImg} />,
        <CategoryCardListItem imgSrc={PlanesImg} />,
        <CategoryCardListItem imgSrc={PlanesImg} />,
    ]);
    function loadCategories() {
        let newCategoriesCardList = categoriesCardList.concat(
            <CategoryCardListItem imgSrc={PlanesImg} />
        );
        newCategoriesCardList = newCategoriesCardList.concat(
            <CategoryCardListItem imgSrc={PlanesImg} />
        );
        setCategoriesCardList(newCategoriesCardList);
    }
    return (
        <section className="category-card-list">
            <label className="labels">Catálogo</label>
            <div className="category-card-list__item-list">
                {categoriesCardList}
            </div>
            <div className="category-card-list__more-categories">
                <label
                    className="category-card-list__more-categories__link"
                    onClick={loadCategories}
                >
                    Ver mas categorías
                </label>
            </div>
        </section>
    );
}

export default CategoryCardList;
