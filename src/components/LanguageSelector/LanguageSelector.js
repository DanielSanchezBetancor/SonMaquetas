import './LanguageSelector.css';

function LanguageSelector() {
    return (
        <>
        <div className='language-selector__wrapper'>
            {/* TODO @DSanchez: Cambiar por props con el idioma seleccionado */}
            <img src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/ES.svg" />
            {/* TODO @DSanchez: De esta lista, no mostrar el idioma que ya esta seleccionado */}
            <li className="language-selector__list">
                <ul name="ENG"><img src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/GB.svg" /></ul>
                <ul name="ESP"><img src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/ES.svg" /></ul>
            </li>
        </div>
        </>
    )
}

export default LanguageSelector;