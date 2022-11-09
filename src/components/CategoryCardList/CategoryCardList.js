import { useEffect, useState } from "react";
import { getData } from "../../utils/Utils";
import "./CategoryCardList.css";
import CategoryCardListItem from "./CategoryCardListItem/CategoryCardListItem";

function CategoryCardList() {
  const DEFAULT_IMG_LIMIT = 4;
  const [counter, setCounter] = useState(DEFAULT_IMG_LIMIT);
  //Setting Card List state with defaults
  const [categoriesCardList, setCategoriesCardList] = useState(setDefaults());
  function setDefaults() {
    const data = getData();
    //Local variables
    let components = [];
    let imgQuantity = 0;
    //Filling components untill limit reached
    while (imgQuantity < DEFAULT_IMG_LIMIT) {
      components = components.concat(
        <CategoryCardListItem
          name={data.categories[imgQuantity].name}
          imgSrc={data.categories[imgQuantity].images}
          idCategory={data.categories[imgQuantity].id}
        />
      );
      imgQuantity++;
    }
    return components;
  }
  function loadCategories() {
    //Setting 4 images as default
    const data = getData();
    let newQuantity = 2;
    //React wont update this values untill next rerender so we will isolate them locally
    let newCategoriesCardList = categoriesCardList;
    let index = counter;
    while (newQuantity > 0 && index < data.categories.length) {
      newCategoriesCardList = newCategoriesCardList.concat(
        <CategoryCardListItem
          name={data.categories[index].name}
          imgSrc={data.categories[index].images}
          idCategory={data.categories[index].id}
        />
      );
      index++;
      newQuantity--;
    }
    setCounter(index);
    setCategoriesCardList(newCategoriesCardList);
  }

  // Dynamic list
  const data = getData();
  const [showMorecategoriesCardLists, setShowMorecategoriesCardLists] =
    useState(true);
  const totalCategories = data.categories;

  useEffect(() => {
    if (categoriesCardList.length === totalCategories.length)
      setShowMorecategoriesCardLists(!showMorecategoriesCardLists);
  }, [categoriesCardList]);

  function showLesscategoriesCardLists() {
    if (categoriesCardList.length > 3) {
      setCategoriesCardList(setDefaults);
      setShowMorecategoriesCardLists(!showMorecategoriesCardLists);
      setCounter(DEFAULT_IMG_LIMIT);
    }
  }
  return (
    <section className="category-card-list">
      <p className="labels">Categorías</p>
      <div className="category-card-list__item-list">{categoriesCardList}</div>
      <div className="category-card-list__more-categories">
        {showMorecategoriesCardLists ? (
          <p
            className="category-card-list__more-categories__link"
            onClick={() => loadCategories()}
          >
            Ver mas productos
          </p>
        ) : (
          <p
            className="category-card-list__more-categories__link"
            onClick={showLesscategoriesCardLists}
          >
            Ver menos productos
          </p>
        )}
      </div>
    </section>
  );
}

export default CategoryCardList;
