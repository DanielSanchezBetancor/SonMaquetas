import { useState } from "react";
import IconClose from "../../assets/icon-close.png";
import IconSearch from "../../assets/icon-search.png";
import logo from "../../assets/titulo.png";
import { getData } from "../../utils/Utils";
import FilteredProductCard from "../FilteredProductCard/FilteredProductCard";
import "./Navbar.css";

function Navbar() {
  const [isSearching, setIsSearching] = useState(false);
  const [filteredSearchedProducts, setFilteredSearchedProducts] = useState([]);

  const data = getData();

  function handleCloseSearchResults() {
    setIsSearching(!isSearching);
    setFilteredSearchedProducts([]);
    document.body.style.overflow = "scroll";
  }

  function handleOpenSearchResults() {
    setIsSearching(!isSearching);
    setFilteredSearchedProducts([]);

    document.body.style.overflow = "hidden";
  }

  function inputSearching(value) {
    const products = data.products.filter((product) => {
      if (product.name.toLocaleLowerCase().includes(value.toLowerCase()))
        return product;
    });

    if (value === " ") setFilteredSearchedProducts([]);

    setFilteredSearchedProducts(products);
  }

  //@TODO pasar los alts a constantes y las categorias a componentes unicos. Quizas las funciones tambien.
  return (
    <nav className="navbar">
      <div
        className={` ${
          isSearching ? "navbar__menu--searching" : "navbar__menu"
        }`}
      >
        <a href="/" className="navbar__logo__link">
          <img
            className="navbar__logo__image"
            src={logo}
            alt="Our logo: Ecommerce"
          />
        </a>
        <img
          className="navbar__search-icon"
          src={IconSearch}
          alt="Icono buscador"
          onClick={() => handleOpenSearchResults()}
        />
      </div>

      {filteredSearchedProducts.length >= 1 && (
        <div id="filteredResults__container">
          <section className="filtered-list">
            <label className="labels filtered-list__title">Resultados</label>
            <div className="filteredResult ">
              {filteredSearchedProducts.map((product) => (
                <FilteredProductCard
                  name={product.name}
                  price={product.price}
                  description={product.description}
                  image={product.images}
                  alt={product.alt}
                  url={product.url}
                />
              ))}
            </div>
          </section>
        </div>
      )}
      {isSearching && (
        <div className="navbar__search-panel open">
          <input
            autoFocus
            className="navbar__search-panel__input"
            type="text"
            onChange={(e) => inputSearching(e.target.value)}
          ></input>
          <img
            src={IconClose}
            className="navbar__close--icon"
            onClick={() => handleCloseSearchResults()}
            alt="closeSearchingIcon"
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
