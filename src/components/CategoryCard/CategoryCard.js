import "./CategoryCard.css";

function CategoryCard({ imgSrc, imgAlt, categoryName }) {
    return (
        <div className="card">
            {/* <div className="card__img__wrapper"> */}
                <img className="card__img" src={imgSrc} alt={imgAlt}></img>
            {/* </div> */}
            <label>{categoryName}</label>
        </div>
    );
}

export default CategoryCard;
