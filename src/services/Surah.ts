import { Request, Response } from "express";

export class SurahHandler {
    static getSurah = (
        req: Request<{index: number}, unknown, unknown, unknown>,
        res: Response
    ) => {
        try {
            const index = req.params.index
            if (index < 1 || index > 115) {
                return res.status(404).send({data: null, message: "Surah dalam Al-Qur'an dari 1 sampai 114"})
            }
            let surah = require(`../../data/quran/${index}.json`)
            return res.send({data: surah})
        } catch (e) {
            res.status(404).send({data: null, message: "Surah dalam Al-Qur'an dari 1 sampai 114"})
        }
    } 
}