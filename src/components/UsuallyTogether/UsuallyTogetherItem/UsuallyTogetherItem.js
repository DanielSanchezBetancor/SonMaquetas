import "./UsuallyTogetherItem.css";

function UsuallyTogetherItem({
    imgSrcFirstProduct,
    imgSrcSecondProduct,
    nameFirstProduct,
    nameSecondProduct,
    groupDescription,
    groupPrice,
}) {
    return (
        <div className="usually-products-item usually-products-item__container">
            <div className="usually-products-item__img usually-products-item__img1">
                <img src={imgSrcFirstProduct} alt="itemPic" />
            </div>
            <div className="usually-products-item__img usually-products-item__img2">
                <img src={imgSrcSecondProduct} alt="itemPic" />
            </div>
            <div className="usually-products-item__information">
                <p className="usually-products-item__information__title">
                    {nameFirstProduct}
                </p>
                <p className="usually-products-item__information__price">+</p>
                <p className="usually-products-item__information__title">
                    {nameSecondProduct}
                </p>
                <p>{groupDescription}</p>
                <p className="usually-products-item__information__price">{groupPrice}€</p>
            </div>
        </div>
    );
}

export default UsuallyTogetherItem;
