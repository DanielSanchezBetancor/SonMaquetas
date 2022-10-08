/**
 * Checks and activates next slide
 * @param {object} currentImg Image that is active on the slider
 * @param {int} userScroll Position of the client scroll cursor
 * @param {int} heightNextSlide Current total height state
 * @param {int} currentSlide Slide counter state
 * @param {object} setCurrentSlide Sets slide counter state
 * @param {object} setHeightNextSlide Sets total height state
 */
export function logicNextSlide(
    currentImg,
    userScroll,
    heightNextSlide,
    currentSlide,
    setCurrentSlide,
    setHeightNextSlide
) {
    //Getting active image params
    const currentImgParams = calculateImageParams(currentImg);
    //New slide will come after the full image (plus all height untill this point) is reached
    const nextSlideHeight =
        heightNextSlide +
        currentImgParams["marginTop"] +
        currentImgParams["clientHeight"];
    //Trigger next slide when position is reached
    if (userScroll > nextSlideHeight) {
        //New height includes the margin bottom
        activateNextSlider(
            nextSlideHeight + currentImgParams["marginBottom"],
            currentSlide,
            setCurrentSlide,
            setHeightNextSlide
        );
    }
}
/**
 * Checks and activates previous slide
 * @param {object} currentImg Previous image that is active on the slider
 * @param {int} userScroll Position of the client scroll cursor
 * @param {int} heightNextSlide Current total height state
 * @param {int} currentSlide Slide counter state
 * @param {object} setCurrentSlide Sets slide counter state
 * @param {object} setHeightNextSlide Sets total height state
 */
export function logicPrevSlide(
    prevImg,
    userScroll,
    heightNextSlide,
    currentSlide,
    setCurrentSlide,
    setHeightNextSlide
) {
    //First slide will have not previous slide, it will come as undefined
    if (prevImg === undefined) {
        //Do nothing
        return;
    }
    //Getting active image params
    const prevImgParams = calculateImageParams(prevImg);
    //Previous slide will come after the previous image top border is reached
    const prevSlideHeight =
        heightNextSlide -
        (prevImgParams["clientHeight"] + prevImgParams["marginBottom"]);
    //Trigger previous slide when position is reached
    if (userScroll < prevSlideHeight) {
        //New height includes the margin top
        activePrevSlider(
            prevSlideHeight - prevImgParams["marginTop"],
            currentSlide,
            setCurrentSlide,
            setHeightNextSlide
        );
    }
}
/* Auxiliar functions */
/**
 * Performs the actions needed to activate next slider
 * @param {int} imgHeight New total height
 * @param {int} currentSlide Slide counter state
 * @param {object} setCurrentSlide Sets slide counter state
 * @param {object} setHeightNextSlide Sets total height state
 */
function activateNextSlider(
    imgHeight,
    currentSlide,
    setCurrentSlide,
    setHeightNextSlide
) {
    //Get buttons list
    const buttons = document.getElementsByClassName("carousel__item__button");
    //Get information list
    const cardInformationTitle =
        document.getElementsByClassName("carousel__item");
    //Deactivate current button
    buttons[currentSlide].classList = "carousel__item__button";
    cardInformationTitle[currentSlide].classList =
        "carousel__item dflex-col-cent";
    //Activate next button
    buttons[currentSlide + 1].classList = "carousel__item__button active";
    cardInformationTitle[currentSlide + 1].classList =
        "carousel__item dflex-col-cent show";
    //Setting next slide counter
    setCurrentSlide(currentSlide + 1);
    //Setting new height to move slide
    setHeightNextSlide(imgHeight);
}
/**
 * Performs the actions needed to activate previous slider
 * @param {int} imgHeight New total height
 * @param {int} currentSlide Slide counter state
 * @param {object} setCurrentSlide Sets slide counter state
 * @param {object} setHeightNextSlide Sets total height state
 */
function activePrevSlider(
    imgHeight,
    currentSlide,
    setCurrentSlide,
    setHeightNextSlide
) {
    //Get buttons list
    const buttons = document.getElementsByClassName("carousel__item__button");
    const cardInformationTitle =
        document.getElementsByClassName("carousel__item");
    //Deactivate current button
    buttons[currentSlide].classList = "carousel__item__button";
    cardInformationTitle[currentSlide].classList =
        "carousel__item dflex-col-cent";
    //Activate next button
    buttons[currentSlide - 1].classList = "carousel__item__button active";
    cardInformationTitle[currentSlide - 1].classList =
        "carousel__item dflex-col-cent show";
    //Setting next slide counter
    setCurrentSlide(currentSlide - 1);
    //Setting new height to move slide
    setHeightNextSlide(imgHeight);
}
/**
 * Calculates offset params (Margin top and bottom) and height from an image and returns the value
 * @param {object} img HTML Object with the image node
 * @returns {object} Array of height and offset params from the image
 */
function calculateImageParams(img) {
    const marginTop = parseInt(
        window.getComputedStyle(img).getPropertyValue("margin-top")
    );
    const clientHeight = img.clientHeight;
    const marginBottom = parseInt(
        window.getComputedStyle(img).getPropertyValue("margin-bottom")
    );
    return {
        marginTop: marginTop,
        clientHeight: clientHeight,
        marginBottom: marginBottom,
    };
}
