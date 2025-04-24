import express from "express";
import {
    getSong,
    getDetailPlaylist,
    getHome,
    getTop100,
    getChartHome,
    getNewReleaseChart,
    getInfo,
    getArtist,
    getArtistSong,
    getLyric,
    search,
    getListMV,
    getCategoryMV,
    getVideo,
    getGenre
} from "../controllers/musicController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Music
 *   description: Music API endpoints
 */

/**
 * @swagger
 * /api/song:
 *   get:
 *     summary: Get song by ID
 *     tags: [Music]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Song ID
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/song", getSong);

/**
 * @swagger
 * /api/detailPlaylist:
 *   get:
 *     summary: Get playlist details
 *     tags: [Music]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Playlist ID
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/detailPlaylist", getDetailPlaylist);

/**
 * @swagger
 * /api/home:
 *   get:
 *     summary: Get homepage data
 *     tags: [Music]
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/home", getHome);

/**
 * @swagger
 * /api/top100:
 *   get:
 *     summary: Get Top 100 songs
 *     tags: [Music]
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/top100", getTop100);

/**
 * @swagger
 * /api/chartHome:
 *   get:
 *     summary: Get chart home data
 *     tags: [Music]
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/chartHome", getChartHome);

/**
 * @swagger
 * /api/newReleaseChart:
 *   get:
 *     summary: Get new release chart
 *     tags: [Music]
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/newReleaseChart", getNewReleaseChart);

/**
 * @swagger
 * /api/info:
 *   get:
 *     summary: Get song info
 *     tags: [Music]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Song ID
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/info", getInfo);

/**
 * @swagger
 * /api/artist:
 *   get:
 *     summary: Get artist info
 *     tags: [Music]
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Artist name
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/artist", getArtist);

/**
 * @swagger
 * /api/artistSong:
 *   get:
 *     summary: Get artist songs by ID
 *     tags: [Music]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Artist ID
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: count
 *         required: false
 *         schema:
 *           type: integer
 *         description: Number of songs
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/artistSong", getArtistSong);

/**
 * @swagger
 * /api/lyric:
 *   get:
 *     summary: Get lyrics by song ID
 *     tags: [Music]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Song ID
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/lyric", getLyric);

/**
 * @swagger
 * /api/search:
 *   get:
 *     summary: Search songs by keyword
 *     tags: [Music]
 *     parameters:
 *       - in: query
 *         name: keyword
 *         required: true
 *         schema:
 *           type: string
 *         description: Search keyword
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/search", search);

/**
 * @swagger
 * /api/listMV:
 *   get:
 *     summary: Get list of music videos
 *     tags: [Music]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MV ID
 *       - in: query
 *         name: page
 *         required: false
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: count
 *         required: false
 *         schema:
 *           type: integer
 *         description: Number of items
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/listMV", getListMV);

/**
 * @swagger
 * /api/categoryMV:
 *   get:
 *     summary: Get MV categories
 *     tags: [Music]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/categoryMV", getCategoryMV);

/**
 * @swagger
 * /api/video:
 *   get:
 *     summary: Get video data
 *     tags: [Music]
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Video ID
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/video", getVideo);

/**
 * @swagger
 * /api/genre:
 *   get:
 *     summary: Get music genres
 *     tags: [Music]
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/genre", getGenre);

export default router;
