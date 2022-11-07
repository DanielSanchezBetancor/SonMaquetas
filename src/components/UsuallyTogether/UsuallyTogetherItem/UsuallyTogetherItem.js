import "./UsuallyTogetherItem.css";

function UsuallyTogetherItem({
    isEven,
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
                <label className="usually-products-item__information__title">
                    {nameFirstProduct}
                </label>
                <label className="usually-products-item__information__title">
                    {nameSecondProduct}
                </label>
                <label>{groupDescription}</label>
                <label>{groupPrice}€</label>
            </div>
        </div>
    );
}

export default UsuallyTogetherItem;
