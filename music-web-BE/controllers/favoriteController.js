import Favorite from "../models/favoriteSongModel.js";

import mongoose from "mongoose";

const getFavorites = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid userId" });
  }

  try {
    const favorites = await Favorite.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: "Error fetching favorites", error: error.message });
  }
};


const getFavoriteById = async (req, res) => {
  const { id } = req.params;
  try {
    const favorite = await Favorite.findById(id);
    if (!favorite) {
      return res.status(404).json({ message: "Favorite not found" });
    }
    res.status(200).json(favorite);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching favorite", error: error.message });
  }
};

const createFavorite = async (req, res) => {
  const {
    userId,
    songId,
  } = req.body;

  if (!userId || !songId) {
    return res.status(400).json({ message: "userId and songId are required" });
  }

  try {
    const exists = await Favorite.findOne({ userId, songId });
    if (exists) {
      return res.status(409).json({ message: "Song already in favorites" });
    }

    const newFavorite = new Favorite({
      userId,
      songId,
    });

    await newFavorite.save();
    res.status(201).json(newFavorite);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating favorite", error: error.message });
  }
};


const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const { songId} = req.body;

  try {
    const updated = await Favorite.findByIdAndUpdate(
      id,
      { songId},
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Favorite not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating favorite", error: error.message });
  }
};

const deleteFavorite = async (req, res) => {
  const { userId, songId } = req.body;

  if (!userId || !songId) {
    return res.status(400).json({ message: "userId and songId are required" });
  }

  try {
    const deleted = await Favorite.findOneAndDelete({ userId, songId });

    if (!deleted) {
      return res.status(404).json({ message: "Favorite not found" });
    }

    res.status(200).json({ message: "Favorite deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting favorite",
      error: error.message,
    });
  }
};

const deleteAllFavorites = async (req, res) => {
  const { userId } = req.params;

  try {
    await Favorite.deleteMany({ userId });
    res.status(200).json({ message: "All favorites deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting all favorites", error: error.message });
  }
};

export {
  getFavorites,
  getFavoriteById,
  createFavorite,
  updateFavorite,
  deleteFavorite,
  deleteAllFavorites,
};