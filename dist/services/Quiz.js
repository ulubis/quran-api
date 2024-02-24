"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizHandler = void 0;
const number_1 = require("../utils/number");
const array_1 = require("../utils/array");
class QuizHandler {
}
exports.QuizHandler = QuizHandler;
// surah name
QuizHandler.surahName = (req, res) => {
    try {
        const index = (0, number_1.getRandomNumber)(1, 114);
        let surah = require(`../../data/quran/${index}.json`);
        const question = `Dalam Al-Qur'an, surah ${surah.name.transliteration.id} adalah surah ke ....`;
        const choices = [
            {
                choice: index,
                right: true
            },
            {
                choice: (0, number_1.recursiveRandNumb)(1, 114, index),
                right: false
            },
            {
                choice: (0, number_1.recursiveRandNumb)(1, 114, index),
                right: false
            },
            {
                choice: (0, number_1.recursiveRandNumb)(1, 114, index),
                right: false
            }
        ];
        res.send({
            question: question,
            choices: (0, array_1.shuffleArray)(choices)
        });
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
};
