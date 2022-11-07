import PlanesImg from "../../../assets/categories-plane.png";
import "./FeaturedProductsItem.css";

function FeaturedProductsItem({
  isEven,
  imgSrc,
  imgAlt,
  name,
  description,
  price,
  url,
}) {
  return (
    <a href={url}>
      <div
        className={"featured-products-item " + (isEven ? " featured-even" : "")}
      >
        <div className="featured-products-item__img">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className="featured-products-item__information">
          <label className="featured-products-item__information__title">
            {name}
          </label>
          <label>{description}</label>
          <label>{price}€</label>
        </div>
      </div>
    </a>
  );
}

export default FeaturedProductsItem;
