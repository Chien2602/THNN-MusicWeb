"use client"

import { useState, useEffect } from "react"
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
  Mic2,
  ListMusic,
  MonitorSpeaker,
  VolumeX,
} from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(70)
  const [isLiked, setIsLiked] = useState(false)
  const duration = 214 // Duration in seconds (3:34)

  // Simulate progress when playing
  useEffect(() => {
    let interval
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime((prev) => Math.min(prev + 1, duration))
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentTime, duration])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <div className="h-24 bg-gradient-to-r from-black to-zinc-900 border-t border-gray-800/30 px-4 flex items-center justify-between backdrop-blur-lg">
      <div className="flex items-center w-1/4">
        <div className="relative group">
          <img
            src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/6/2/7/2627c10c924237d129a289cc89cd695c.jpg"
            alt="Album cover"
            className="h-14 w-14 rounded-md mr-3 shadow-lg group-hover:brightness-75 transition-all"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreHorizontal className="text-white" size={20} />
          </div>
        </div>
        <div>
          <h4 className="text-white text-sm font-medium hover:underline cursor-pointer">Hẹn Gặp Em Dưới Ánh Trăng</h4>
          <p className="text-gray-400 text-xs hover:text-white hover:underline cursor-pointer transition-colors">
            HIEUTHUHAI
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
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={18} className="text-black" /> : <Play size={18} className="text-black ml-0.5" />}
          </button>
          <SkipForward size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <Repeat size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>

        <div className="flex items-center w-full gap-2">
          <span className="text-xs text-gray-400 w-10 text-right">{formatTime(currentTime)}</span>
          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden group cursor-pointer">
            <div
              className="h-full bg-gray-300 group-hover:bg-green-500 transition-colors"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            >
              <div
                className="h-3 w-3 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ left: `${(currentTime / duration) * 100}%`, marginLeft: "-6px" }}
              ></div>
            </div>
          </div>
          <span className="text-xs text-gray-400 w-10">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center justify-end w-1/4 gap-3">
        {/* <Mic2 size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" /> */}
        <ListMusic size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
        {/* <MonitorSpeaker size={16} className="text-gray-400 hover:text-white cursor-pointer transition-colors" /> */}
        <div className="flex items-center gap-1 w-24">
          {volume === 0 ? (
            <VolumeX size={16} className="text-gray-400 cursor-pointer" onClick={() => setVolume(70)} />
          ) : (
            <Volume2 size={16} className="text-gray-400 cursor-pointer" onClick={() => setVolume(0)} />
          )}
          <Slider value={[volume]} max={100} step={1} className="w-20" onValueChange={(value) => setVolume(value[0])} />
        </div>
      </div>
    </div>
  )
}
