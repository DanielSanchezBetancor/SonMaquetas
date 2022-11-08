// Components
import Carousel from "../Carousel/Carousel";
import CategoryCardList from "../CategoryCardList/CategoryCardList";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import HeroPage from "../HeroPage/HeroPage";
import UsuallyTogether from "../UsuallyTogether/UsuallyTogether";
// Styles
import "./Content.css";
function Content() {
  return (
    <section className="content">
      <HeroPage />
      <CategoryCardList />
      <Carousel />
      <FeaturedProducts />
      <UsuallyTogether />
    </section>
  );
}

export default Content;
