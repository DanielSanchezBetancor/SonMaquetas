function CategoryCardListItem({imgSrc}) {
    return (
        <div className="category-card-list__item">
            <label>Category</label>
            <img src={imgSrc} alt="Imagen"></img>
        </div>
    );
}

export default CategoryCardListItem;
