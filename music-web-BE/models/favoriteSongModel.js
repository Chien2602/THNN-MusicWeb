// Save Song Favorites
import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    songId: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model('Favorites', favoriteSchema, 'songFavorites');