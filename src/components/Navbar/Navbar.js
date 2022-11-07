import { useState } from "react";
import logo from "../../assets/titulo.png";
import IconClose from "../../assets/icon-close.png";
import IconSearch from "../../assets/icon-search.png";
import { getData } from "../../utils/Utils";
import FilteredProductCard from "../FilteredProductCard/FilteredProductCard";
import "./Navbar.css";

function Navbar() {
  const [isSearching, setIsSearching] = useState(false);
  const [filteredSearchedProducts, setFilteredSearchedProducts] = useState([]);

  const data = getData();

  function openSearch() {
    const searchPanel = document.querySelector(".navbar__search-panel");
    const searchPaneInput = searchPanel.querySelector(
      ".navbar__search-panel__input"
    );

    if (searchPanel.classList.contains("open")) {
      setIsSearching(!isSearching);
      setFilteredSearchedProducts([]);
      document.body.style.overflow = "scroll";
      searchPanel.classList.remove("open");
      searchPaneInput.value = "";
    } else {
      setIsSearching(!isSearching);
      setFilteredSearchedProducts([]);
      document.body.style.overflow = "hidden";
      searchPanel.classList.add("open");
      searchPaneInput.autofocus = true;
    }
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
          onClick={() => openSearch()}
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
      <div className="navbar__search-panel">
        <input
          className="navbar__search-panel__input"
          type="text"
          onChange={(e) => inputSearching(e.target.value)}
        ></input>
        <img
          src={IconClose}
          className="navbar__close--icon"
          onClick={() => openSearch()}
          alt="closeSearchingIcon"
        />
      </div>
    </nav>
  );
}

export default Navbar;
