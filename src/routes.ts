import { Router } from "express";
import { SurahHandler } from "./services/Surah";
import { QuizHandler } from "./services/Quiz";

const router = Router();

router.use((req, res, next) => {
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=86400, stale-while-revalidate');
    next();
});

router.get('/surah/:index', SurahHandler.getSurah)
router.get('/quiz/surahKe', QuizHandler.surahName)

router.get('/', (req, res) => res.send('Home'))

export {router}