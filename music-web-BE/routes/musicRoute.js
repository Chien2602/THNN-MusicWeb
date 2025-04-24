const express = require("express")
const router = express.Router()
const {
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
} = require("../controllers/musicController");

router.get("/song", getSong);
router.get("/detailPlaylist", getDetailPlaylist);
router.get("/home", getHome);
router.get("/top100", getTop100);
router.get("/chartHome", getChartHome);
router.get("/newReleaseChart", getNewReleaseChart);
router.get("/info", getInfo);
router.get("/artist", getArtist);
router.get("/artistSong", getArtistSong);
router.get("/lyric", getLyric);
router.get("/search", search);
router.get("/listMV", getListMV);
router.get("/categoryMV", getCategoryMV);
router.get("/video", getVideo);
router.get("/genre", getGenre);

module.exports = router;