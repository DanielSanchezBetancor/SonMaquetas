import PlanesImg from "../../../assets/categories-plane.png";
import './FeaturedProductsItem.css';

function FeaturedProductsItem({isEven}) {
    return (
        <div className={"featured-products-item " + ((isEven) ? ' even' : '')}>
            <div className="featured-products-item__img">
                <img src={PlanesImg} />
            </div>
            <div className="featured-products-item__information">
                <label className="featured-products-item__information__title">
                    Producto destacado
                </label>
                <label>Descripcion del producto desctacado mencionado</label>
                <label>XXX€</label>
            </div>
        </div>
    );
}

export default FeaturedProductsItem;
