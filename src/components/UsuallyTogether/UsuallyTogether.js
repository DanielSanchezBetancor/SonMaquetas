import { useState } from "react";
import "./UsuallyTogether.css";
import UsuallyTogetherItem from "./UsuallyTogetherItem/UsuallyTogetherItem";

function UsuallyTogether() {
  const [usuallyProducts, setusuallyProducts] = useState([
    <UsuallyTogetherItem />,
    <UsuallyTogetherItem isEven={true} />,
    <UsuallyTogetherItem />,
  ]);

  function loadusuallyProducts() {
    let newusuallyProducts = usuallyProducts.concat(
      <UsuallyTogetherItem isEven={true} />
    );
    newusuallyProducts = newusuallyProducts.concat(<UsuallyTogetherItem />);
    setusuallyProducts(newusuallyProducts);
  }

  return (
    <section className="usually-products">
      <label className="labels">Juntos habitualmente</label>
      <div className="usually-products-list">{usuallyProducts}</div>
      <div className="usually-products__more-categories">
        <label
          className="usually-products__more-categories__link"
          onClick={loadusuallyProducts}
        >
          Ver mas productos
        </label>
      </div>
    </section>
  );
}

export default UsuallyTogether;
