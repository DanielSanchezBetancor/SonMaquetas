
import Data from '../assets/data.json';

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