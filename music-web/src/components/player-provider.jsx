"use client";

import { createContext, useContext, useState } from "react";

export const PlayerContext = createContext({
  currentSong: null,
  setCurrentSong: () => {},

  currentPlaylist: null,
  setCurrentPlaylist: () => {},

  currentArtist: null,
  setCurrentArtist: () => {},

<<<<<<< HEAD
  currentUser: null,
  setCurrentUser: () => {},
=======
  isPlaying: false,
  setIsPlaying: () => {},

  playNext: () => {},
  playPrev: () => {},
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
});

export const usePlayer = () => useContext(PlayerContext);

export function PlayerProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  const [currentArtist, setCurrentArtist] = useState(null);
<<<<<<< HEAD
  const [currentUser, setCurrentUser] = useState(null);
  
=======
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
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        setCurrentSong,

        currentPlaylist,
        setCurrentPlaylist,

        currentArtist,
        setCurrentArtist,
<<<<<<< HEAD
        
        currentUser,
        setCurrentUser,
=======

        isPlaying,
        setIsPlaying,

        playNext,
        playPrev,
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}
