const {
    ZingMp3
} = require("zingmp3-api-full-v3");
const axios = require("axios");

const getSong = (req, res) => {
    ZingMp3.getSong(req.query.id).then((data) => {
        res.json(data);
    });
};

const getDetailPlaylist = (req, res) => {
    ZingMp3.getDetailPlaylist(req.query.id).then((data) => {
        res.json(data);
    });
};

const getHome = (req, res) => {
    ZingMp3.getHome().then((data) => {
        res.json(data);
    });
};

const getTop100 = (req, res) => {
    ZingMp3.getTop100().then((data) => {
        res.json(data);
    });
};

const getChartHome = (req, res) => {
    ZingMp3.getChartHome().then((data) => {
        res.json(data);
    });
};

const getNewReleaseChart = (req, res) => {
    ZingMp3.getNewReleaseChart().then((data) => {
        res.json(data);
    });
};

const getInfo = (req, res) => {
    ZingMp3.getInfoSong(req.query.id).then((data) => {
        res.json(data);
    });
};

const getArtist = (req, res) => {
    ZingMp3.getArtist(req.query.name).then((data) => {
        res.json(data);
    });
};

const getArtistSong = (req, res) => {
    ZingMp3.getListArtistSong(req.query.id, req.query.page, req.query.count).then((data) => {
        res.json(data);
    });
};

const getLyric = (req, res) => {
    ZingMp3.getLyric(req.query.id).then((data) => {
        res.json(data);
    });
};

const search = (req, res) => {
    ZingMp3.search(req.query.keyword).then((data) => {
        res.json(data);
    });
};

const getListMV = (req, res) => {
    ZingMp3.getListMV(req.query.id, req.query.page, req.query.count).then((data) => {
        res.json(data);
    });
};

const getCategoryMV = (req, res) => {
    ZingMp3.getCategoryMV(req.query.id).then((data) => {
        res.json(data);
    });
};

const getVideo = (req, res) => {
    ZingMp3.getVideo(req.query.id).then((data) => {
        res.json(data);
    });
};

const getGenre = async (req, res) => {
    try {
        const response = await axios.get(process.env.API_GENRE, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
                "Referer": "https://zingmp3.vn/hub",
                "Origin": "https://zingmp3.vn",
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Accept-Language": "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7",
                "Cookie": "_fbp=fb.1.1744288563688.118782074143959864; zpsid=eMqpTcwdFagwSouQRhvFL_yrGmTgk4bT-Yn63tRbAYgU4cCEIeKJBeLKO1b_YMqUgs0fI4Y3PXcc2o4SCD1o2w8j62LCmd4jXHS235xBSGtEAGmj6hvy3G; __zi=3000.SSZzejyD0jSbZUgxWaGPoJIFlgNCIW6AQ9sqkju84vnwakgptqTSc7oKuBQKGbAUD9VlkfL9MPCrC0.1; __zi-legacy=3000.SSZzejyD0jSbZUgxWaGPoJIFlgNCIW6AQ9sqkju84vnwakgptqTSc7oKuBQKGbAUD9VlkfL9MPCrC0.1; za_oauth_v4=a9fce60d88cde2ceef00d6e7c98a00c9b2aba9419a9a1eb3138bf1d6d31c68af; _ga=GA1.1.1938728227.1744288788; cto_bundle=wsJiAV9hdzhBT1J6WiUyRm8xVHhkaWhZbE9mOTZBUnJjOGF4TENFRW5menVZQTJ6RVclMkZFTXUyWSUyQkNLQlpqZUJ3TCUyQmJQM1R6UFZxZ1hjTTBPRGpodUNIMWRyajIwU09wZUF6Qk5jdG1HUWhmY3plVE9KMmcyYjFvZFFaQ2Jxc2ZTYmxaYklMYU56VXNXVW5zbG54R3klMkJRWThISGtldSUyQmZSc2QyNnlQQ0Y3QzExZDMwQ3gzMGt2SCUyQlJGajFiRDY2bWNGJTJCcjIlMkZySFZOR2h4NzdBbVgzRkVHeiUyQlBhVzZmQUZVaWtoZXV0WmJndWNvb09HVW1ha3hFQmVoUFNFeFdvN0ZSckhncEI; _ga_0CM5NZ8HKZ=GS1.1.1744455982.9.1.1744456251.0.0.0; zmp3_rqid_lagecy=MTA2NjE1NTA3MXwxNC4xODYdUngNDMdUngODh8WeBnVsWeBHwxNzQ0ODAxMDg3ODUx; zmp3_app_version.1=11312; atmpv=1; zmp3_rqid=MHwxMTMdUngMTmUsICyLjEzMS4xMjB8djEdUngMTMdUngMTJ8MTmUsIC0NTI1MjA2NjA1NQ; _zabst=1%2Cd2ViLmFwaS5hZHRpbWFzZXJ2ZXIudm4%3D"
            }
        });
        res.json(response.data);
        console.log(response.data.data.genre);
    } catch (error) {
        console.error("Error fetching genre:", error.message);
        res.status(500).json({
            message: "Failed to fetch genre"
        });
    }
};


module.exports = {
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
};