const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    playlistName: {
        type: String,
        required: true,
        trim: true,
    },
    songs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'songFavorites',
        }
    ],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Playlist', playlistSchema, 'playlist');