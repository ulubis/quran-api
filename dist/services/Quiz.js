"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizHandler = void 0;
const number_1 = require("../utils/number");
class QuizHandler {
}
exports.QuizHandler = QuizHandler;
// surah name
QuizHandler.surahName = (req, res) => {
    try {
        const index = (0, number_1.getRandomNumber)(1, 114);
        let surah = require(`../../data/quran/${index}.json`);
        res.send({
            question: surah.name.transliteration.id,
            answer: index
        });
    }
    catch (e) {
        console.log(e);
        res.send(e);
    }
};
