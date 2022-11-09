import CarouselImage from "../CarouselImage/CarouselImage";
import CarouselInformation from "../CarouselInformation/CarouselInformation";
import CarouselItemButton from "../CarouselItemButton/CarouselItemButton";
import ArrowButton from "../../../assets/menu-arrow.svg";
const PRODUCT_LIMIT = 3;

export function calculateSlide(scrollLeft, slideNumber, setSlideNumber) {
    //Total width determined by user width
    const totalWidth =
        document.querySelector(".carousel__sliders").scrollWidth / 3;
    //Adding a little space on right so it doesnt trigger so fast
    const triggerNextSlideWidth = totalWidth * (slideNumber + 1) - 50;
    //Adding a little space on left so it doesnt trigger so fast
    const triggerPreviousSlideWidth = totalWidth * slideNumber - 50;
    console.log(scrollLeft, triggerNextSlideWidth);
    if (scrollLeft >= triggerNextSlideWidth) {
        triggerSlide(setSlideNumber, slideNumber, slideNumber + 1, true);
    }
    //iPhones have a weird extra scroll that can trigger this function on the first slide like there was another behind
    if (slideNumber > 0 && scrollLeft < triggerPreviousSlideWidth) {
        triggerSlide(setSlideNumber, slideNumber, slideNumber - 1, true);
    }
}
export function triggerSlide(
    setSlideNumber,
    hidingSlideNumber,
    showingSlideNumber
) {
    //Since I cant get a way to get the refreshed value from the carousel slide number, lets try this
    if (hidingSlideNumber === -1) {
        //In this scenario, we dont have any refreshed value and not a targeted slide (forwards or backwards)
        if (typeof showingSlideNumber === "string") {
            let itemWidth =
                document.querySelector(".carousel__sliders").scrollWidth / 3;
            let modifier = -1;
            if (showingSlideNumber === "add") {
                modifier = 1;
            }
            let nextSlideMarginLeft =
                document.querySelector(".carousel__sliders").scrollLeft +
                    modifier * (itemWidth);
            if (nextSlideMarginLeft !== 0) {
                showingSlideNumber = nextSlideMarginLeft / itemWidth;
            }
        }
        //Total width determined by user width
        const totalWidth =
            (document.querySelector(".carousel__sliders").scrollWidth / 3) *
            showingSlideNumber;
        document.querySelector(".carousel__sliders").scrollLeft = totalWidth;
        return;
    }
    hideAndShowComponents(
        ".carousel__information",
        "information-active",
        hidingSlideNumber,
        showingSlideNumber
    );
    hideAndShowComponents(
        ".carousel__item__button",
        "active",
        hidingSlideNumber,
        showingSlideNumber
    );
    hideAndShowComponents(
        ".carousel__price",
        "price-active",
        hidingSlideNumber,
        showingSlideNumber
    );
    setSlideNumber(showingSlideNumber);
}
function hideAndShowComponents(
    targetClassName,
    auxiliarClass,
    indexHiding,
    indexShowing
) {
    //Selecting all components from the same class
    const componentList = document.querySelectorAll(targetClassName);
    //Removing auxiliar class name from active slide
    componentList[indexHiding].classList.remove(auxiliarClass);
    //Adding auxiliar class name for next/previous slide
    componentList[indexShowing].classList.add(auxiliarClass);
}
/**
 * Checks how many buttons should be on the carousel based on the limit set in this class
 * @returns {object} Array of Item Buttons
 */
export function calculateButtons(setSlideNumber, getSlideNumber) {
    let components = [];
    let counter = 0;
    while (counter < PRODUCT_LIMIT) {
        components = components.concat(
            <CarouselItemButton
                index={counter}
                isActive={counter === 0}
                setSlideNumber={setSlideNumber}
            />
        );
        counter++;
    }
    return components;
}
export function calculateArrowButtons(setSlideNumber) {
    let components = [];
    components = components.concat(
        <img
            src={ArrowButton}
            className="carousel__arrow__button"
            onClick={() => triggerSlide(setSlideNumber, -1, "substract")}
            alt=""
        />
    );
    components = components.concat(
        <img
            src={ArrowButton}
            className="carousel__arrow__button reverted"
            onClick={() => triggerSlide(setSlideNumber, -1, "add")}
            alt=""
        />
    );
    return components;
}
export function calculatePrices(products, randoms) {
    let components = [];
    let counter = 0;
    while (counter < PRODUCT_LIMIT) {
        let className =
            "carousel__price" + (counter === 0 ? " price-active" : "");
        let key = "carousel__price__" + counter;
        components = components.concat(
            <div className={className} key={key}>
                <p>{products[randoms[counter]].price}€</p>
            </div>
        );
        counter++;
    }
    return components;
}
export function calculateInformation(products, randoms) {
    let components = [];
    let counter = 0;
    while (counter < PRODUCT_LIMIT) {
        components = components.concat(
            <CarouselInformation
                key={counter}
                isActive={counter === 0}
                name={products[randoms[counter]].name}
                description={products[randoms[counter]].description}
                url={products[randoms[counter]].url}
            />
        );
        counter++;
    }
    return components;
}
export function calculateImages(products, randoms) {
    let components = [];
    let counter = 0;
    while (counter < PRODUCT_LIMIT) {
        components = components.concat(
            <CarouselImage image={products[randoms[counter]].images} />
        );
        counter++;
    }
    return components;
}
/* Auxiliar functions */
