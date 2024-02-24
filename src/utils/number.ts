export const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const recursiveRandNumb = (min: number, max: number, exclude: number): number => {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    if (result === exclude) {
        recursiveRandNumb(min, max, exclude)
    }
    return result
}
  