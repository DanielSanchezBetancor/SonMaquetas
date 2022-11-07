import CarouselImage from "../CarouselImage/CarouselImage";
import CarouselInformation from "../CarouselInformation/CarouselInformation";
import CarouselItemButton from "../CarouselItemButton/CarouselItemButton";

const PRODUCT_LIMIT = 3;

export function calculateSlide(scrollLeft, slideNumber, setSlideNumber) {
    //Total width determined by user width
    const totalWidth = document.querySelector(".carousel__sliders").clientWidth;
    //Adding a little space on right so it doesnt trigger so fast
    const triggerNextSlideWidth = totalWidth * (slideNumber + 1);
    //Adding a little space on left so it doesnt trigger so fast
    const triggerPreviousSlideWidth = totalWidth * slideNumber - 50;
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
    showingSlideNumber,
    userScroll = false
) {
    if ( typeof hidingSlideNumber === "function") {
        hidingSlideNumber = hidingSlideNumber();
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
    if (userScroll !== true) {
        //Total width determined by user width
        const sliders = document.querySelector(".carousel__sliders");
        const totalWidth = sliders.clientWidth * showingSlideNumber + 50;
        sliders.marginLeft = totalWidth;
    }
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
                realSlideNumber={getSlideNumber}
            />
        );
        counter++;
    }
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
                {products[randoms[counter]].price}
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
