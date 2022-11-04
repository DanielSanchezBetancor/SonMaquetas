import "./ItemCardListItem.css";

function ItemCardListItem({ name, imgSrc, imgAlt, price, href}) {
    return (
        <a href={href} className="category__product__list__item">
            <div className="category__product__list__item__img">
                <img src={imgSrc} alt={imgAlt}></img>
            </div>
            <p>{name}</p>
            <p>{price}€</p>
        </a>
    );
}

export default ItemCardListItem;
