import { useEffect, useState } from "react";
import {
  calculateFeatured,
  calculateRandoms,
  getData,
} from "../../utils/Utils.js";
import "./FeaturedProducts.css";
import FeaturedProductsItem from "./FeaturedProductsItem/FeaturedProductsItem.js";

function FeaturedProducts() {
  const DEFAULT_IMG_LIMIT = 3;
  const NEW_IMG_LIMIT = 2;
  const data = getData();
  const featured = calculateFeatured(data);
  const [randoms] = useState(calculateRandoms(featured.length));
  const [counter, setCounter] = useState(DEFAULT_IMG_LIMIT);
  const [featuredProducts, setFeaturedProducts] = useState(setDefaults());
  const [showMoreFeaturedProducts, setShowMoreFeaturedProducts] =
    useState(true);
  const totalFeaturedProducts = data.products.filter(
    (product) => product.featuredProduct
  );

  function setDefaults() {
    let components = [];
    for (let i = 0; i < DEFAULT_IMG_LIMIT; i++) {
      components = components.concat(
        <FeaturedProductsItem
          imgSrc={featured[randoms[i]].images}
          name={featured[randoms[i]].name}
          description={featured[randoms[i]].description}
          price={featured[randoms[i]].price}
          url={featured[randoms[i]].url}
        />
      );
    }
    return components;
  }
  //Setting 3 images as default
  function loadFeaturedProducts() {
    let components = featuredProducts;
    //Starting on last index + 1, adding NEW_IMG_LIMIT components if exists
    for (let i = counter; i < counter + NEW_IMG_LIMIT; i++) {
      if (i < featured.length) {
        components = components.concat(
          <FeaturedProductsItem
            imgSrc={featured[randoms[i]].images}
            name={featured[randoms[i]].name}
            description={featured[randoms[i]].description}
            price={featured[randoms[i]].price}
            url={featured[randoms[i]].url}
          />
        );
      }
    }
    /*     if (components === featuredProducts)
      setShowMoreFeaturedProducts(!showMoreFeaturedProducts);*/
    setFeaturedProducts(components);
    setCounter(counter + 2);
  }

  useEffect(() => {
    if (featuredProducts.length === totalFeaturedProducts.length)
      setShowMoreFeaturedProducts(!showMoreFeaturedProducts);
  }, [featuredProducts]);

  function showLessFeaturedProducts() {
    if (featuredProducts.length > 3) {
      setFeaturedProducts(featuredProducts.slice(0, 3));
      setShowMoreFeaturedProducts(!showMoreFeaturedProducts);
      setCounter(DEFAULT_IMG_LIMIT);
    }
  }

  return (
    <section className="featured-products">
      <p className="labels">Productos destacados</p>
      <div className="featured-products-list">{featuredProducts}</div>
      <div className="featured-products__more-categories">
        {showMoreFeaturedProducts ? (
          <p
            className="featured-products__more-categories__link"
            onClick={loadFeaturedProducts}
          >
            Ver mas productos
          </p>
        ) : (
          <p
            className="featured-products__more-categories__link"
            onClick={showLessFeaturedProducts}
          >
            Ver menos productos
          </p>
        )}
      </div>
    </section>
  );
}

export default FeaturedProducts;
