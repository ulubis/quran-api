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

            res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')

            res.send({
                question: surah.name.transliteration.id,
                answer: index
            })
        } catch(e) {
            console.log(e)
            res.send(e)
        }
    }
}