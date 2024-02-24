"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const Surah_1 = require("./services/Surah");
const Quiz_1 = require("./services/Quiz");
const router = (0, express_1.Router)();
exports.router = router;
router.use((req, res, next) => {
    res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=86400, stale-while-revalidate');
    next();
});
router.get('/surah/:index', Surah_1.SurahHandler.getSurah);
router.get('/quiz/surahKe', Quiz_1.QuizHandler.surahName);
router.get('/', (req, res) => res.send('Home'));
