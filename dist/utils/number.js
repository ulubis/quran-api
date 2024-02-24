"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveRandNumb = exports.getRandomNumber = void 0;
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.getRandomNumber = getRandomNumber;
const recursiveRandNumb = (min, max, exclude) => {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    if (result === exclude) {
        (0, exports.recursiveRandNumb)(min, max, exclude);
    }
    return result;
};
exports.recursiveRandNumb = recursiveRandNumb;
