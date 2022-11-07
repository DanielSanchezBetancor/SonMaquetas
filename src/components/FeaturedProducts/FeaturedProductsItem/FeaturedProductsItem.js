import PlanesImg from "../../../assets/categories-plane.png";
import './FeaturedProductsItem.css';

function FeaturedProductsItem({imgSrc, imgAlt, name, description, price}) {
    return (
        <div className="featured-products-item">
            <div className="featured-products-item__img">
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div className="featured-products-item__information">
                <p className="featured-products-item__information__title">
                    {name}
                </p>
                <p>{description}</p>
                <p className="featured-product-item__information__price">{price}€</p>
            </div>
        </div>
    );
}

export default FeaturedProductsItem;
