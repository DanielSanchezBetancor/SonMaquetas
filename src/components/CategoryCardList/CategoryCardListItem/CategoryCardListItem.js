import { Link } from "react-router-dom";
import "./CategoryCardListItem.css";

function CategoryCardListItem({ name, imgSrc, idCategory }) {
    return (
        <Link to={(`category/${idCategory}`)} className="category-card-list__item">
            <div className="category-card-list__item__img">
                <img src={imgSrc} alt="Imagen"></img>
            </div>
            <p>{name}</p>
        </Link>
    );
}

export default CategoryCardListItem;
