import Logo from "../Logo/Logo";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import InputSearch from "../InputSearch/InputSearch";
import CartButtonIcon from "../CartButtonIcon/CartButtonIcon";
import "./NewNavbar.css";
function NewNavbar() {
    return (
        <nav className="nav">
            <div className="nav__content">
                <Logo />
                <LanguageSelector />
                <div className="nav__content__pack">
                    <InputSearch />
                    <CartButtonIcon />
                </div>
            </div>
        </nav>
    );
}

export default NewNavbar;
