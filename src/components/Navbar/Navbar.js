import { useState } from "react";
import ECommerceSVG from "../../assets/E-Commerce.svg";
import IconMenu from "../../assets/icon-menu.png";
import IconSearch from "../../assets/icon-search.png";
import MenuArrowSVG from "../../assets/menu-arrow.svg";
import { getData } from "../../utils/Utils";
import "./Navbar.css";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const data = getData();
  const categories = data.categories;

  const click = (event) => {
    if (
      !event.srcElement.className.includes("expanded") &&
      !event.srcElement.className.includes("navbar_item__wrapper") &&
      !event.path[0].id.includes("navbar__item") &&
      !event.path[0].className.includes("navbar__menu-icon") &&
      isExpanded === true
    ) {
      openMenu();
    }
  };

  document.addEventListener("click", click);

  function openMenu() {
    setIsExpanded(!isExpanded);
    const sections = document.querySelectorAll("section");
    if (sections.length > 0 && sections[0].classList.contains("hide")) {
      for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove("hide");
      }
    }
  }
  function openSubmenu(event, id) {
    const navbar = document.querySelector("#navbar__item__" + id);
    const arrow = navbar.querySelector("#arrow");
    const subitems = navbar.querySelectorAll(".navbar__expanded__subitem");
    if (arrow.classList.contains("expanded")) {
      arrow.classList.remove("expanded");
      for (let i = 0; i < subitems.length; i++) {
        subitems[i].classList.remove("pre-show");
      }
    } else {
      arrow.classList.add("expanded");
      for (let i = 0; i < subitems.length; i++) {
        subitems[i].classList.add("pre-show");
      }
    }
    finishMenuAction(event, id);
  }
  /* Las transiciones cuando le quitas la altura (100% => 0px), se muestra durante la transicion todo stackeado junto. Creamos esta funcion que pasa por una clase intermedia que mejora las transiciones de los elementos */
  function finishMenuAction(event, id) {
    const navbar = document.querySelector("#navbar__item__" + id);
    const arrow = navbar.querySelector("#arrow");
    const subitems = navbar.querySelectorAll(".navbar__expanded__subitem");
    if (arrow.classList.contains("expanded")) {
      for (let i = 0; i < subitems.length; i++) {
        subitems[i].classList.remove("pre-show");
        subitems[i].classList.add("show");
      }
    } else {
      for (let i = 0; i < subitems.length; i++) {
        subitems[i].classList.add("pre-show");
        subitems[i].classList.remove("show");
      }
    }
  }
  function openSearch() {
    //Vamos a cerrar el menú de navegación si esta abierto
    // openMenu(false);
    const searchPanel = document.querySelector(".navbar__search-panel");
    const searchPaneInput = searchPanel.querySelector(
      ".navbar__search-panel__input"
    );
    if (searchPanel.classList.contains("open")) {
      searchPanel.classList.remove("open");
      searchPaneInput.value = "";
    } else {
      searchPanel.classList.add("open");
      searchPaneInput.autofocus = true;
    }
  }
  //@TODO pasar los alts a constantes y las categorias a componentes unicos. Quizas las funciones tambien.
  return (
    <nav className="navbar">
      <div className="navbar__menu">
        <img
          className="navbar__menu-icon"
          src={IconMenu}
          alt="Icono para abrir y cerrar menú lateral"
          onClick={openMenu}
        />
        <a href="/">
          <img
            className="navbar__logo"
            src={ECommerceSVG}
            alt="Our logo: Ecommerce"
          />
        </a>
        <img
          className="navbar__search-icon"
          src={IconSearch}
          alt="Icono buscador"
          onClick={openSearch}
        />
      </div>
      <div className="navbar__expanded">
        <li>
          {isExpanded &&
            categories.map((category, index) => {
              return (
                <ul id={"navbar__item__" + index}>
                  <div
                    className="navbar_item__wrapper"
                    onClick={() => openSubmenu(this, index)}
                  >
                    <img
                      id="arrow"
                      className="navbar__expanded__arrow"
                      src={MenuArrowSVG}
                      alt="Arrow for menu items"
                    />
                    <label className="navbar__expanded__name">
                      {category.nombre}
                    </label>
                  </div>
                  <li>
                    {category.subcategorias.map((subcategory) => {
                      return (
                        <ul
                          id={"navbar__subitem__" + index}
                          className="navbar__expanded__subitem"
                        >
                          <img
                            id="arrow"
                            className="navbar__expanded__arrow"
                            src={MenuArrowSVG}
                            alt="Arrow for menu items"
                          />
                          <label className="navbar__expanded__name">
                            {subcategory}
                          </label>
                        </ul>
                      );
                    })}
                  </li>
                </ul>
              );
            })}
        </li>
      </div>
      <div className="navbar__search-panel">
        <input className="navbar__search-panel__input" type="text"></input>
        <img
          className="navbar__search-panel__icon"
          src={IconSearch}
          alt="Icono buscador"
          onClick={openSearch}
        />
      </div>
    </nav>
  );
}

export default Navbar;
