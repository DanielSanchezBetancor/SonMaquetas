import "./FilteredProductCard.css";

function FilteredProductCard({ name, price, description, image, alt }) {
  return (
    <div className="filteredProductCard">
      <p className="filteredProductCard__title">{name}</p>
      <div className="filteredProductCard__body">
        <img src={image} alt={alt}></img>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default FilteredProductCard;
