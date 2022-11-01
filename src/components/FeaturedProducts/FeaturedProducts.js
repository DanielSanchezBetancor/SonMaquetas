
import { useState } from 'react';
import FeaturedProductsItem from './FeaturedProductsItem/FeaturedProductsItem.js';
import './FeaturedProducts.css';

function FeaturedProducts() {
    //Setting 3 images as default
    const [featuredProducts, setFeaturedProducts] = useState([
        <FeaturedProductsItem />,
        <FeaturedProductsItem isEven={true}/>,
        <FeaturedProductsItem />
    ]);
    function loadFeaturedProducts() {
        let newfeaturedProducts = featuredProducts.concat( <FeaturedProductsItem isEven={true}/>)
        newfeaturedProducts = newfeaturedProducts.concat( <FeaturedProductsItem />)
        setFeaturedProducts(newfeaturedProducts);
    }
    return (
        <section className="featured-products">
            <label className="labels">Productos destacados</label>
            <div className="featured-products-list">
                {featuredProducts}
            </div>
            <div className="featured-products__more-categories">
                <label className="featured-products__more-categories__link" onClick={loadFeaturedProducts}>Ver mas productos</label>
            </div>
        </section>
    );
}

export default FeaturedProducts;
