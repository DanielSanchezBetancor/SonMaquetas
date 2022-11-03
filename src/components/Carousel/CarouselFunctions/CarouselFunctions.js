import CarouselImage from "../CarouselImage/CarouselImage";
import CarouselInformation from "../CarouselInformation/CarouselInformation";
import CarouselItemButton from "../CarouselItemButton/CarouselItemButton";

const PRODUCT_LIMIT = 3;

export function calculateSlide(scrollLeft, slideNumber, setSlideNumber) {
    console.log(scrollLeft);
    console.log(slideNumber);
    //Total width determined by user width
    const totalWidth = document.querySelector(".carousel__sliders").clientWidth;
    //Adding a little space on right so it doesnt trigger so fast
    const triggerNextSlideWidth = totalWidth * slideNumber;
    console.log(triggerNextSlideWidth);
    //Adding a little space on left so it doesnt trigger so fast
    const triggerPreviousSlideWidth = totalWidth * (slideNumber - 1) - 50;
    console.log(triggerPreviousSlideWidth);
    if (scrollLeft >= triggerNextSlideWidth) {
        console.log("triggerSlide 1");
        triggerSlide(1, setSlideNumber, slideNumber);
    }
    //iPhones have a weird extra scroll that can trigger this function on the first slide like there was another behind
    if (slideNumber > 1 && scrollLeft < triggerPreviousSlideWidth) {
        console.log("triggerSlide 2");
        triggerSlide(-1, setSlideNumber, slideNumber);
    }
}
function triggerSlide(counter, setSlideNumber, slideNumber) {
    hideAndShowComponents(
        ".carousel__information__wrapper",
        "information-active",
        counter,
        slideNumber
    );
    hideAndShowComponents(
        ".carousel__item__button",
        "active",
        counter,
        slideNumber
    );
    hideAndShowComponents(".carousel__price", "price-active", counter, slideNumber);
    setSlideNumber(slideNumber + counter);
}
function hideAndShowComponents(targetClassName, auxiliarClass, counter, slideNumber) {
    //We setted slideNumber as 1, but for index we need 0
    const correctIndex = slideNumber - 1;
    //Selecting all components from the same class
    const componentList = document.querySelectorAll(targetClassName);
    //Removing auxiliar class name from active slide
    componentList[correctIndex].classList.remove(auxiliarClass);
    //Adding auxiliar class name for next/previous slide
    componentList[correctIndex + counter].classList.add(auxiliarClass);
}
/**
 * Checks how many buttons should be on the carousel based on the limit set in this class
 * @returns {object} Array of Item Buttons
 */
export function calculateButtons(setSlideNumber) {
    let components = [];
    let counter = 0;
    while (counter < PRODUCT_LIMIT) {
        components = components.concat(
            <CarouselItemButton index={counter} isActive={counter === 0} setSlideNumber={setSlideNumber}/>
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
                {products[randoms[counter]].precio}
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
                description={products[randoms[counter]].descripcion}
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
