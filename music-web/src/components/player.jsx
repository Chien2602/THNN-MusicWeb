"use client"

import { useState, useEffect, useRef } from "react"
import axios from "axios"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Repeat,
  Shuffle,
  Heart,
  MoreHorizontal,
  ListMusic,
  VolumeX,
} from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { usePlayer } from "@/components/player-provider"

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(70)
  const [isLiked, setIsLiked] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)
  const { currentSong } = usePlayer()

  useEffect(() => {
    localStorage.setItem("audioCurrentTime", currentTime)
    localStorage.setItem("audioVolume", volume)
  }, [currentTime, volume])

  useEffect(() => {
    const loadAndPlay = async () => {
      if (currentSong && audioRef.current) {
        try {
          let url = currentSong.url
          if (!url) {
            const res = await axios.get(`http://localhost:3001/api/song?id=${currentSong.encodeId}`)
            url = res.data?.data?.["128"]
          }
  
          if (url) {
            audioRef.current.src = url
            await audioRef.current.load()
            await audioRef.current.play()
            setIsPlaying(true)
          } else {
            console.error("No playable URL found for the song.")
          }
        } catch (error) {
          console.error("Error loading or playing audio:", error)
        }
      }
    }
  
    loadAndPlay()
  }, [currentSong?.encodeId])
  

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("durationchange", updateDuration)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("durationchange", updateDuration)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
      setIsMuted(volume === 0)
    }
  }, [volume])

  const handlePlayPause = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setCurrentTime(0)
  }

  const toggleMute = () => {
    if (volume > 0) {
      setVolume(0)
    } else {
      setVolume(70)
    }
  }

  const handleSeek = (value) => {
    const seekTime = value[0]
    setCurrentTime(seekTime)
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <div className="h-24 bg-gradient-to-r from-black to-zinc-900 border-t border-gray-800/30 px-4 flex items-center justify-between backdrop-blur-lg">
      <audio ref={audioRef} />

      <div className="flex items-center w-1/4">
        <div className="relative group">
          <img
            src={
              currentSong?.thumbnail ||
              "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/6/2/7/2627c10c924237d129a289cc89cd695c.jpg"
            }
            alt="Album cover"
            className="h-14 w-14 rounded-md mr-3 shadow-lg group-hover:brightness-75 transition-all"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreHorizontal className="text-white" size={20} />
          </div>
        </div>
        <div>
          <h4 className="text-white text-sm font-medium hover:underline cursor-pointer">
            {currentSong?.title || "No song playing"}
          </h4>
          <p className="text-gray-400 text-xs hover:text-white hover:underline cursor-pointer transition-colors">
            {currentSong?.artistsNames || "Unknown Artist"}
          </p>
        </div>
        <Heart
          className={`ml-4 cursor-pointer transition-all hover:scale-110 ${isLiked ? "text-green-500 fill-green-500" : "text-gray-400"}`}
          size={16}
          onClick={() => setIsLiked(!isLiked)}
        />
      </div>

      <div className="flex flex-col items-center w-2/4">
        <div className="flex items-center gap-5 mb-2">
          <Shuffle size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <SkipBack size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <button
            className="bg-white rounded-full p-2 hover:scale-105 transition-transform shadow-lg"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <Pause size={18} className="text-black" />
            ) : (
              <Play size={18} className="text-black ml-0.5" />
            )}
          </button>
          <SkipForward size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <Repeat size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>

        <div className="flex items-center w-full gap-2">
          <span className="text-xs text-gray-400 w-10 text-right">{formatTime(currentTime)}</span>
          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={1}
            className="w-full"
            onValueChange={handleSeek}
          />
          <span className="text-xs text-gray-400 w-10">{formatTime(currentSong?.duration != null ? currentSong.duration : duration) }</span>
        </div>
      </div>

      <div className="flex items-center justify-end w-1/4 gap-3">
        <ListMusic size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        <div className="flex items-center gap-1 w-24">
          {volume === 0 ? (
            <VolumeX size={16} className="text-gray-400 cursor-pointer" onClick={toggleMute} />
          ) : (
            <Volume2 size={16} className="text-gray-400 cursor-pointer" onClick={toggleMute} />
          )}
          <Slider
            value={[volume]}
            max={100}
            step={1}
            className="w-20"
            onValueChange={(value) => setVolume(value[0])}
          />
        </div>
      </div>
    </div>
  )
}
