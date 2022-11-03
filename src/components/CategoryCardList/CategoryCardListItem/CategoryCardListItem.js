import './CategoryCardListItem.css';

function CategoryCardListItem({name, imgSrc}) {
    return (
        <div className="category-card-list__item">
            <div className="category-card-list__item__img">
                <img src={imgSrc} alt="Imagen"></img>
            </div>
            <label>{name}</label>
        </div>
    );
}

export default CategoryCardListItem;
