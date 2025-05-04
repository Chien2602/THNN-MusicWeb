import mongoose from 'mongoose';

const historySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    songId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'songFavorites',
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
    duration: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model('History', historySchema, 'history');