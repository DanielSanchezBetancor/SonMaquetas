import "./FilteredProductCard.css";

function FilteredProductCard({ name, price, description, image, alt, url }) {
  return (
    <a href={url}>
      <div className="filteredProductCard">
        <p className="filteredProductCard__title">{name}</p>
        <div className="filteredProductCard__body">
          <img src={image} alt={alt}></img>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </div>
    </a>
  );
}

export default FilteredProductCard;
