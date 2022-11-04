import Data from "../assets/data.json";

export function getData() {
    return Data;
}
/**
 * Extracts an array of randoms that won't repeat, based on a limit
 * @param {int} limit Maximum amount of random integers
 * @returns {object} Array of randoms
 */
export function calculateRandoms(limit, oldRandoms = []) {
    //New array of randoms starting from and old / empty array
    let randoms = oldRandoms;
    //Length calculated with a new array plus the old array length
    let counter = 0 + oldRandoms.length;
    while (counter < limit) {
        let newRandom = Math.floor(Math.random() * limit);
        let exists = randoms.find((oldRandom) => newRandom === oldRandom);
        if (exists === false || exists === undefined) {
            randoms = randoms.concat(newRandom);
            counter++;
        }
    }
    return randoms;
}
export function calculateFeatured(data) {
    const featured = data.products.filter(
        (product) => product.featuredProduct === "1"
    );
    return featured;
}
export function calculatePacks(data) {
    const packs = [];
    for (let i = 0; i < data.products.length; i++) {
        if (data.products[i].pack !== undefined) {
            let normalizedPackNumber = parseFloat(data.products[i].pack);
            let pos = "second_image";
            let groupPrice = 0;
            if (packs[normalizedPackNumber] === undefined) {
                packs[normalizedPackNumber] = [];
                pos = "first_image";
            } else {
                groupPrice = parseFloat(packs[normalizedPackNumber]["first_image"].groupPrice);
            }
            packs[normalizedPackNumber][pos] = {
                images: data.products[i].images,
                name: data.products[i].name,
                groupDescription: data.products[i].description,
                groupPrice: (parseFloat(data.products[i].price) + groupPrice)
            };
        }
    }
    return packs;
}
