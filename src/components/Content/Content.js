import CategoryCardList from "../CategoryCardList/CategoryCardList";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts.js";
import HeroPage from "../HeroPage/HeroPage";
/* Carousel images */
<<<<<<< Updated upstream
import Carousel from "../Carousel/Carousel.js";
import UsuallyTogether from "../UsuallyTogether/UsuallyTogether";
import "./Content.css";

function Content() {
  return (
    <section className="content">
      <HeroPage />
      <CategoryCardList />
      <Carousel />
=======
import PlanesImg from "../../assets/categories-plane.png";
import ShipImg from "../../assets/categories-ship.png";
import TrainImg from "../../assets/categories-train.png";
import Carousel from "../Carousel/Carousel.js";

import { useEffect, useState } from "react";
import UsuallyTogether from "../UsuallyTogether/UsuallyTogether";
import "./Content.css";
function Content() {
  const [slide, setSlider] = useState(<HeroPage />);
  useEffect(() => {
    setTimeout(() => {
      setSlider(<Carousel images={[PlanesImg, ShipImg, TrainImg]} />);
    }, 5000);
  });
  return (
    <section className="content">
      {slide}
      <CategoryCardList />
>>>>>>> Stashed changes
      <FeaturedProducts />
      <UsuallyTogether />
    </section>
  );
}

export default Content;
