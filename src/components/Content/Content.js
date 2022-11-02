import CategoryCardList from '../CategoryCardList/CategoryCardList';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts.js';
import HeroPage from '../HeroPage/HeroPage';
/* Carousel images */
import Carousel from '../Carousel/Carousel.js';
import './Content.css';
function Content() {
    return (
        <section className='content'>
            <HeroPage />
            <CategoryCardList />
            <Carousel />
            <FeaturedProducts />
        </section>
    )
}

export default Content;