import PlanesImg from "../../../assets/categories-plane.png";
import "./UsuallyTogetherItem.css";

function UsuallyTogetherItem({ isEven }) {
  return (
    <div
      className={
        "usually-products-item usually-products-item__container" +
        (isEven ? " even" : "")
      }
    >
      <div className="usually-products-item__img usually-products-item__img1">
        <img src={PlanesImg} alt="itemPic" />
      </div>
      <div className="usually-products-item__img usually-products-item__img2">
        <img src={PlanesImg} alt="itemPic" />
      </div>
      <div className="usually-products-item__information">
        <label className="usually-products-item__information__title">
          Nombre del producto 1
        </label>
        <label className="usually-products-item__information__title">
          Nombre del producto 2
        </label>
        <label>Descripcion del pack</label>
        <label>XXX€</label>
      </div>
    </div>
  );
}

export default UsuallyTogetherItem;
