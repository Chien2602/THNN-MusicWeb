// Save Song Favorites
import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    songId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    songName: {
        type: String,
        required: true,
    },
    artistName: {
        type: String,
        required: true,
    },
    albumName: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Song', songSchema, 'songFavorites');