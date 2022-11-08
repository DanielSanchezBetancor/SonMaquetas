import "./FeaturedProductsItem.css";

function FeaturedProductsItem({
  imgSrc,
  imgAlt,
  name,
  description,
  price,
  url,
}) {
  return (
    <a href={url}>
      <div className="featured-products-item">
        <div className="featured-products-item__img">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className="featured-products-item__information">
          <p className="featured-products-item__information__title">{name}</p>
          <p>{description}</p>
          <p className="featured-product-item__information__price">{price}€</p>
        </div>
      </div>
    </a>
  );
}

export default FeaturedProductsItem;
