"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurahHandler = void 0;
class SurahHandler {
}
exports.SurahHandler = SurahHandler;
SurahHandler.getSurah = (req, res) => {
    try {
        const index = req.params.index;
        if (index < 1 || index > 115) {
            return res.status(404).send({ data: null, message: "Surah dalam Al-Qur'an dari 1 sampai 114" });
        }
        let surah = require(`../../data/quran/${index}.json`);
        return res.send({ data: surah });
    }
    catch (e) {
        res.status(404).send({ data: null, message: "Surah dalam Al-Qur'an dari 1 sampai 114" });
    }
};
