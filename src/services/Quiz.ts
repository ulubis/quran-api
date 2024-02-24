import { Request, Response } from "express";
import { getRandomNumber, recursiveRandNumb } from "../utils/number";
import { shuffleArray } from "../utils/array";

export class QuizHandler {
    // surah name
    static surahName = (
        req: Request<unknown, unknown, unknown, unknown>,
        res: Response
    ) => {
        try {
            const index = getRandomNumber(1, 114)
            let surah = require(`../../data/quran/${index}.json`)
            const question =  `Dalam Al-Qur'an, surah ${surah.name.transliteration.id} adalah surah ke ....`
            const choices = [
                {
                    choice: index,
                    right: true
                },
                {
                    choice: recursiveRandNumb(1, 114, index),
                    right: false
                },
                {
                    choice: recursiveRandNumb(1, 114, index),
                    right: false
                },
                {
                    choice: recursiveRandNumb(1, 114, index),
                    right: false
                }
            ]
            res.send({
                question: question,
                choices: shuffleArray(choices)
            })
        } catch(e) {
            console.log(e)
            res.send(e)
        }
    }
}