import History from "../models/historyModel.js";
import { getInfo } from "./musicController.js";

const getHistory = async (req, res) => {
  const { userId } = req.params;
  try {
    const history = await History.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(history);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi lấy lịch sử", error: error.message });
  }
};

const getHistoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const history = await History.findById(id);
    if (!history) {
      return res.status(404).json({ message: "Không tìm thấy lịch sử" });
    }
    res.status(200).json(history);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi lấy chi tiết lịch sử", error: error.message });
  }
};

const createHistory = async (req, res) => {
  const { userId, songId, songName, artistName, albumName, duration } =
    req.body;
  try {
    const newHistory = new History({
      userId,
      songId,
      songName,
      artistName,
      albumName,
      duration,
    });
    await newHistory.save();
    res.status(201).json(newHistory);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi tạo lịch sử", error: error.message });
  }
};

const updateHistory = async (req, res) => {
  const { id } = req.params;
  const { songId, songName, artistName, albumName, duration } = req.body;
  try {
    const updated = await History.findByIdAndUpdate(
      id,
      { songId, songName, artistName, albumName, duration },
      { new: true }
    );
    if (!updated) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy lịch sử để cập nhật" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi cập nhật lịch sử", error: error.message });
  }
};

const deleteHistory = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await History.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Không tìm thấy lịch sử để xóa" });
    }
    res.status(200).json({ message: "Đã xóa bản ghi lịch sử", data: deleted });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi xóa lịch sử", error: error.message });
  }
};

const deleteAllHistory = async (req, res) => {
  const { userId } = req.params;
  try {
    await History.deleteMany({ userId });
    res.status(200).json({ message: "Đã xóa toàn bộ lịch sử thành công" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi xóa toàn bộ lịch sử", error: error.message });
  }
};

const deleteHistoryBySongId = async (req, res) => {
  const { userId, songId } = req.params;
  try {
    const deleted = await History.findOneAndDelete({ userId, songId });
    if (!deleted) {
      return res.status(404).json({ message: "Không tìm thấy bản ghi để xóa" });
    }
    res.status(200).json({ message: "Đã xóa bản ghi", data: deleted });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi xóa bản ghi", error: error.message });
  }
};

const getRecommendedHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const history = await History.find({ userId })
      .sort({ createdAt: -1 })
      .limit(5);

    if (history.length === 0) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy lịch sử để gợi ý" });
    }

    const genresRaw = await Promise.all(
      history.map((item) => getInfo(item.songId).then((data) => data.genre))
    );
    const genres = [...new Set(genresRaw)];

    const artistsRaw = await Promise.all(
      history.map((item) =>
        getInfo(item.songId).then((data) => data.artistName)
      )
    );
    const artists = [...new Set(artistsRaw)];

    const recommendedSongs = await getSongsByGenreOrArtist(genres, artists);

    const songIds = history.map((item) => item.songId.toString());
    const filteredRecommendedSongs = recommendedSongs.filter(
      (song) => !songIds.includes(song.id.toString())
    );

    if (filteredRecommendedSongs.length === 0) {
      return res.status(404).json({
        message: "Không có bài hát gợi ý nào khác với lịch sử đã nghe",
      });
    }

    res.status(200).json(filteredRecommendedSongs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi khi lấy gợi ý bài hát", error: error.message });
  }
};

const getSongsByGenreOrArtist = async (genres, artists) => {
  try {
    const genrePromises = genres.map((genre) =>
      getInfo(genre).then((data) => data.songs)
    );
    const artistPromises = artists.map((artist) =>
      getInfo(artist).then((data) => data.songs)
    );

    const genreSongs = await Promise.all(genrePromises);
    const artistSongs = await Promise.all(artistPromises);
    const allSongs = [
      ...new Set([...genreSongs.flat(), ...artistSongs.flat()]),
    ];

    return allSongs;
  } catch (error) {
    console.error("Lỗi khi lấy bài hát theo thể loại hoặc nghệ sĩ", error);
    throw new Error("Lỗi khi lấy bài hát theo thể loại hoặc nghệ sĩ");
  }
};

export {
  getHistory,
  getHistoryById,
  createHistory,
  updateHistory,
  deleteHistory,
  deleteAllHistory,
  deleteHistoryBySongId,
  getRecommendedHistory,
};