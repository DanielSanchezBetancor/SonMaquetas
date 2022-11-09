import { useEffect, useState } from "react";
import { calculatePacks, calculateRandoms, getData } from "../../utils/Utils";
import "./UsuallyTogether.css";
import UsuallyTogetherItem from "./UsuallyTogetherItem/UsuallyTogetherItem";

function UsuallyTogether() {
  const DEFAULT_IMG_LIMIT = 3;
  const NEW_IMG_LIMIT = 2;
  const data = getData();
  const packs = calculatePacks(data);
  const [randoms] = useState(calculateRandoms(packs.length));
  const [counter, setCounter] = useState(DEFAULT_IMG_LIMIT);
  const [usuallyProducts, setUsuallyProducts] = useState(setDefaults());

  const [showMoreFeaturedProducts, setShowMoreFeaturedProducts] =
    useState(true);
  const totalUsuallyProducts = data.products.filter((product) => product.pack);
  console.log(totalUsuallyProducts);
  useEffect(() => {
    if (usuallyProducts.length === totalUsuallyProducts.length)
      setShowMoreFeaturedProducts(!showMoreFeaturedProducts);
  }, [usuallyProducts]);

  function showLessFeaturedProducts() {
    if (usuallyProducts.length > 3) {
      setUsuallyProducts(setDefaults());
      setShowMoreFeaturedProducts(!showMoreFeaturedProducts);
      setCounter(DEFAULT_IMG_LIMIT);
    }
  }

  function setDefaults() {
    let components = [];
    //Index starts on 1 with packs
    for (let i = 1; i < DEFAULT_IMG_LIMIT + 1; i++) {
      if (i < packs.length) {
        components = components.concat(
          <UsuallyTogetherItem
            isEven={i % 2 === 0}
            imgSrcFirstProduct={packs[i]["first_image"].images}
            imgSrcSecondProduct={packs[i]["second_image"].images}
            nameFirstProduct={packs[i]["first_image"].name}
            nameSecondProduct={packs[i]["second_image"].name}
            groupDescription={packs[i]["second_image"].groupDescription}
            groupPrice={packs[i]["second_image"].groupPrice}
          />
        );
      }
    }
    return components;
  }
  function loadUsuallyProducts() {
    let components = usuallyProducts;
    //Starting on last index + 1, adding NEW_IMG_LIMIT components if exists
    for (let i = counter; i < counter + 1 + NEW_IMG_LIMIT; i++) {
      if (i < packs.length) {
        components = components.concat(
          <UsuallyTogetherItem
            isEven={i % 2 === 0}
            imgSrcFirstProduct={packs[i]["first_image"].images}
            imgSrcSecondProduct={packs[i]["second_image"].images}
            nameFirstProduct={packs[i]["first_image"].name}
            nameSecondProduct={packs[i]["second_image"].name}
            groupDescription={packs[i]["second_image"].groupDescription}
            groupPrice={packs[i]["second_image"].groupPrice}
          />
        );
      }
    }
    setUsuallyProducts(components);
    setCounter(counter + NEW_IMG_LIMIT);
  }

  return (
    <section className="usually-products">
      <p className="labels">Juntos habitualmente</p>
      <div className="usually-products-list">{usuallyProducts}</div>
      <div className="usually-products__more-categories">
        {showMoreFeaturedProducts ? (
          <p
            className="usually-products__more-categories__link"
            onClick={loadUsuallyProducts}
          >
            Ver mas productos
          </p>
        ) : (
          <p
            className="usually-products__more-categories__link"
            onClick={showLessFeaturedProducts}
          >
            Ver menos productos
          </p>
        )}
      </div>
    </section>
  );
}

export default UsuallyTogether;
