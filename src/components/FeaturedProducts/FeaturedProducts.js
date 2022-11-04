import { useState } from "react";
import FeaturedProductsItem from "./FeaturedProductsItem/FeaturedProductsItem.js";
import "./FeaturedProducts.css";
import {
    calculateRandoms,
    getData,
    calculateFeatured,
} from "../../utils/Utils.js";

function FeaturedProducts() {
    const DEFAULT_IMG_LIMIT = 3;
    const NEW_IMG_LIMIT = 2;
    const data = getData();
    const featured = calculateFeatured(data);
    const [randoms] = useState(calculateRandoms(featured.length));
    const [counter, setCounter] = useState(DEFAULT_IMG_LIMIT);
    const [featuredProducts, setFeaturedProducts] = useState(setDefaults());
    function setDefaults() {
        let components = [];
        for (let i = 0; i < DEFAULT_IMG_LIMIT; i++) {
            components = components.concat(
                <FeaturedProductsItem
                    imgSrc={featured[randoms[i]].images}
                    name={featured[randoms[i]].name}
                    description={featured[randoms[i]].description}
                    price={featured[randoms[i]].price}
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
                    />
                );
            }
        }
        setFeaturedProducts(components);
        setCounter(counter + 2);
    }
    return (
        <section className="featured-products">
            <p className="labels">Productos destacados</p>
            <div className="featured-products-list">{featuredProducts}</div>
            <div className="featured-products__more-categories">
                <p
                    className="featured-products__more-categories__link"
                    onClick={loadFeaturedProducts}
                >
                    Ver mas productos
                </p>
            </div>
        </section>
    );
}

export default FeaturedProducts;
