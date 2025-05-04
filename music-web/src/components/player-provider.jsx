"use client";

import { createContext, useContext, useState } from "react";

export const PlayerContext = createContext({
  currentSong: null,
  setCurrentSong: () => {},

  currentPlaylist: null,
  setCurrentPlaylist: () => {},

  currentArtist: null,
  setCurrentArtist: () => {},

  isPlaying: false,
  setIsPlaying: () => {},

  playNext: () => {},
  playPrev: () => {},
});

export const usePlayer = () => useContext(PlayerContext);

export function PlayerProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  const [currentArtist, setCurrentArtist] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playNext = () => {
    if (!currentPlaylist || currentPlaylist.length === 0 || !currentSong)
      return;

    const index = currentPlaylist.findIndex(
      (song) => song.id === currentSong.id
    );
    if (index >= 0 && index < currentPlaylist.length - 1) {
      setCurrentSong(currentPlaylist[index + 1]);
    }
  };

  const playPrev = () => {
    if (!currentPlaylist || currentPlaylist.length === 0 || !currentSong)
      return;

    const index = currentPlaylist.findIndex(
      (song) => song.id === currentSong.id
    );
    if (index > 0) {
      setCurrentSong(currentPlaylist[index - 1]);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        setCurrentSong,

        currentPlaylist,
        setCurrentPlaylist,

        currentArtist,
        setCurrentArtist,

        isPlaying,
        setIsPlaying,

        playNext,
        playPrev,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
