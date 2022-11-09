import { useEffect, useState } from "react";
import { getData } from "../../utils/Utils";
import "./ItemCardList.css";
import ItemCardListItem from "./ItemCardListItem/ItemCardListItem.js";

function ItemCardList({ category }) {
  const DEFAULT_IMG_LIMIT = 10;
  const [counter, setCounter] = useState(DEFAULT_IMG_LIMIT);
  //Setting Card List state with defaults
  const [itemCardList, setItemCardList] = useState(setDefaults());
  const [showMoreFeaturedProducts, setShowMoreFeaturedProducts] =
    useState(true);
  const data = getData();
  const totalCategories = data.products.filter(
    (product) => product.category === category.id
  );

  useEffect(() => {
    if (itemCardList.length === totalCategories.length)
      setShowMoreFeaturedProducts(!showMoreFeaturedProducts);
  }, [itemCardList]);

  function showLessFeaturedProducts() {
    if (itemCardList.length > 4) {
      setItemCardList(setDefaults());
      setShowMoreFeaturedProducts(!showMoreFeaturedProducts);
      setCounter(DEFAULT_IMG_LIMIT);
    }
  }

  function setDefaults() {
    const data = getData();
    //Local variables
    let components = [];
    let imgQuantity = 0;
    let dataLength = 0;
    //Filling components untill limit reached
    while (
      imgQuantity < DEFAULT_IMG_LIMIT &&
      dataLength < data.products.length
    ) {
      console.log(data.products[dataLength].category);
      console.log(category.id);
      if (data.products[dataLength].category === category.id) {
        components = components.concat(
          <ItemCardListItem
            name={data.products[dataLength].name}
            imgSrc={data.products[dataLength].images}
            imgAlt={data.products[dataLength].altImage}
            price={data.products[dataLength].price}
            href={data.products[dataLength].url}
          />
        );
        imgQuantity++;
      }
      dataLength++;
    }
    return components;
  }
  function loadProducts() {
    //Setting 4 images as default
    const data = getData();
    let newQuantity = 4;
    //React wont update this values untill next rerender so we will isolate them locally
    let newItemCardList = itemCardList;
    let index = counter;
    while (newQuantity > 0 && index < data.products.length) {
      newItemCardList = newItemCardList.concat(
        <ItemCardListItem
          name={data.products[index].name}
          imgSrc={data.products[index].images}
          imgAlt={data.products[index].altImage}
          price={data.products[index].price}
          href={data.products[index].url}
        />
      );
      index++;
      newQuantity--;
    }
    setCounter(index);
    setItemCardList(newItemCardList);
  }

  return (
    <section className="category__product">
      <p className="labels">Productos</p>
      <div className="category__product__list">{itemCardList}</div>
      <div className="category__product__more-products">
        {showMoreFeaturedProducts ? (
          <p
            className="category__product__more-products__link"
            onClick={() => loadProducts()}
          >
            Ver mas productos
          </p>
        ) : (
          <p
            className="category__product__more-products__link"
            onClick={showLessFeaturedProducts}
          >
            Ver menos productos
          </p>
        )}
      </div>
    </section>
  );
}

export default ItemCardList;
