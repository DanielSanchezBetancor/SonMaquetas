import PlanesImg from "../../../assets/categories-plane.png";
import './FeaturedProductsItem.css';

function FeaturedProductsItem({imgSrc, imgAlt, name, description, price}) {
    return (
        <div className="featured-products-item">
            <div className="featured-products-item__img">
                <img src={imgSrc} alt={imgAlt} />
            </div>
            <div className="featured-products-item__information">
                <label className="featured-products-item__information__title">
                    {name}
                </label>
                <label>{description}</label>
                <label>{price}</label>
            </div>
        </div>
    );
}

export default FeaturedProductsItem;
