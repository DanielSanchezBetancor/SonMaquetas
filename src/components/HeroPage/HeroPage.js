import BGHeroPage from "../../assets/bg-hero-page.jpg";
import './HeroPage.css';

function HeroPage() {
    return (
        <section className="hero-page">
            <img
                className="hero-page__background"
                alt="background de la hero page"
                src={BGHeroPage}
            />
            <label className="hero-page__introduction">Un mundo para crear</label>
        </section>
    );
}

export default HeroPage;
