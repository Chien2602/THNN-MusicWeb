"use client"

<<<<<<< HEAD
import { Play, MoreHorizontal, Clock, Heart, Pause } from "lucide-react"
=======
import { Play, MoreHorizontal, Clock, Heart, ChevronLeft, ChevronRight, SkipBack, SkipForward } from "lucide-react"
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
import { Button } from "@/components/ui/button"
import { usePlayer } from "@/components/player-provider"
import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"
<<<<<<< HEAD
import { cn } from "@/lib/utils"

export function PopularTracks() {
  const { currentArtist, setCurrentSong, currentSong, isPlaying, togglePlayPause } = usePlayer()
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [totalTracks, setTotalTracks] = useState(0)

  const fetchAllTracks = async () => {
=======

export function PopularTracks() {
  const { currentArtist } = usePlayer()
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [itemsPerPage] = useState(10)

  const fetchTracks = async (page = 1) => {
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
    if (!currentArtist) return

    setLoading(true)
    setError(null)

    try {
<<<<<<< HEAD
      // First, get the total count to know how many tracks to fetch
      const countResponse = await fetch(`http://localhost:3001/api/artistSong?id=${currentArtist.id}&page=1&count=1`)

      if (!countResponse.ok) {
        throw new Error("Failed to fetch track count")
      }

      const countData = await countResponse.json()
      const totalItems = Number.parseInt(countData.data.total) || 0
      setTotalTracks(totalItems)

      if (totalItems === 0) {
        setTracks([])
        setLoading(false)
        return
      }

      // Now fetch all tracks in one request
      const response = await fetch(
        `http://localhost:3001/api/artistSong?id=${currentArtist.id}&page=1&count=${totalItems}`,
=======
      const response = await fetch(
        `http://localhost:3001/api/artistSong?id=${currentArtist.id}&page=${page}&count=${itemsPerPage}`,
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
      )

      if (!response.ok) {
        throw new Error("Failed to fetch tracks")
      }

      const data = await response.json()

<<<<<<< HEAD
=======
      // Fix data handling - assuming data.data.items is the array of tracks
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
      if (data.data && Array.isArray(data.data.items)) {
        setTracks(data.data.items)
      } else {
        setTracks([])
      }

<<<<<<< HEAD
=======
      setTotalPages(data.data.totalPage || 1)
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
      setLoading(false)
    } catch (err) {
      console.error("Error fetching tracks:", err)
      setError(err.message)
      setLoading(false)
      setTracks([])
    }
  }

  useEffect(() => {
    if (currentArtist) {
<<<<<<< HEAD
      fetchAllTracks()
    }
  }, [currentArtist])

=======
      setCurrentPage(1) // Reset to first page when artist changes
      fetchTracks(1)
    }
  }, [currentArtist])

  // Handle page change
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    setCurrentPage(page)
    fetchTracks(page)

    // Scroll to top of the table
    document.getElementById("tracks-table")?.scrollIntoView({ behavior: "smooth" })
  }

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      // Calculate start and end of visible pages
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if we're at the beginning or end
      if (currentPage <= 2) {
        end = Math.min(totalPages - 1, 4)
      } else if (currentPage >= totalPages - 1) {
        start = Math.max(2, totalPages - 3)
      }

      // Add ellipsis if needed
      if (start > 2) {
        pages.push("...")
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pages.push("...")
      }

      // Always show last page
      pages.push(totalPages)
    }

    return pages
  }

>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
  const formatPlayCount = (count) => {
    if (!count) return "-"
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  const hasData = tracks && tracks.length > 0

<<<<<<< HEAD
  const handleSongClick = (song) => {
    if (currentSong && currentSong.encodeId === song.encodeId) {
      togglePlayPause()
    } else {
      setCurrentSong(song)
    }
  }

  const isCurrentSong = (song) => {
    return currentSong && currentSong.encodeId === song.encodeId
  }

  return (
    <div className="mt-10">
      <h2 className="mb-6 text-2xl font-bold tracking-tight">Tất cả bài hát</h2>
      <div className="rounded-lg bg-neutral-900/60 p-4 backdrop-blur-sm shadow-xl border border-neutral-800/50 overflow-x-auto">
        <table id="tracks-table" className="w-full table-auto">
          <thead>
            <tr className="border-b border-neutral-800 text-left text-sm text-neutral-400">
              <th className="pb-4 pl-4 w-12">#</th>
              <th className="pb-4 w-[50%]">Title</th>
              <th className="hidden pb-4 md:table-cell w-[30%]">Album</th>
              <th className="pb-4 pr-4 text-right w-[20%]">
                <Clock className="h-4 w-4 ml-auto" />
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800/30">
            {loading ? (
              // Loading skeletons - show a reasonable number while loading
              Array(10)
=======
  return (
    <div className="mt-10">
      <h2 className="mb-6 text-2xl font-bold">Popular</h2>
      <div className="rounded-lg bg-neutral-900/40 p-4">
        <table id="tracks-table" className="w-full table-auto">
          <thead>
            <tr className="border-b border-neutral-800 text-left text-sm text-neutral-400">
              <th className="pb-4 pl-4">#</th>
              <th className="pb-4">Title</th>
              <th className="hidden pb-4 md:table-cell">Album</th>
              <th className="hidden pb-4 lg:table-cell">Plays</th>
              <th className="pb-4 pr-4 text-right">
                <Clock className="h-4 w-4" />
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              // Loading skeletons
              Array(itemsPerPage)
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
                .fill(0)
                .map((_, index) => (
                  <tr key={`skeleton-${index}`} className="h-16">
                    <td className="pl-4">
                      <Skeleton className="h-4 w-4" />
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded" />
<<<<<<< HEAD
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-32" />
                          <Skeleton className="h-3 w-24" />
                        </div>
=======
                        <Skeleton className="h-4 w-32" />
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
                      </div>
                    </td>
                    <td className="hidden md:table-cell">
                      <Skeleton className="h-4 w-24" />
                    </td>
<<<<<<< HEAD
=======
                    <td className="hidden lg:table-cell">
                      <Skeleton className="h-4 w-16" />
                    </td>
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
                    <td className="pr-4 text-right">
                      <Skeleton className="h-4 w-12 ml-auto" />
                    </td>
                  </tr>
                ))
            ) : error ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-red-400">
<<<<<<< HEAD
                  <div className="flex flex-col items-center gap-2">
                    <p>Error loading tracks: {error}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => fetchAllTracks()}
                      className="mt-2 bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700"
                    >
                      Try again
                    </Button>
                  </div>
=======
                  Error loading tracks: {error}.{" "}
                  <Button variant="link" onClick={() => fetchTracks(currentPage)}>
                    Try again
                  </Button>
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
                </td>
              </tr>
            ) : !hasData ? (
              <tr>
<<<<<<< HEAD
                <td colSpan={5} className="py-12 text-center text-neutral-400">
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-lg">No tracks available for this artist</p>
                    <p className="text-sm text-neutral-500">Try selecting a different artist</p>
                  </div>
                </td>
              </tr>
            ) : (
              tracks.map((track, index) => {
                const isCurrent = isCurrentSong(track)
                return (
                  <tr
                    key={track.encodeId || index}
                    onClick={() => handleSongClick(track)}
                    className={cn(
                      "group h-16 cursor-pointer text-neutral-300 transition-all hover:bg-neutral-800/70",
                      isCurrent && "bg-neutral-800/80 text-white border-l-2 border-green-500",
                    )}
                  >
                    <td className="pl-4">
                      <div className="flex h-full items-center justify-center w-8">
                        {isCurrent ? (
                          isPlaying ? (
                            <Pause className="h-4 w-4 fill-green-500 text-green-500" />
                          ) : (
                            <Play className="h-4 w-4 fill-green-500 text-green-500" />
                          )
                        ) : (
                          <>
                            <span className="group-hover:hidden">{index + 1}</span>
                            <Play className="hidden h-4 w-4 fill-white text-white group-hover:block" />
                          </>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "relative h-10 w-10 min-w-10 overflow-hidden rounded shadow-md",
                            isCurrent && "ring-2 ring-green-500",
                          )}
                        >
                          <img
                            src={track.thumbnail || "/placeholder.svg?height=60&width=60"}
                            alt={track.title}
                            width={60}
                            height={60}
                            className={cn(
                              "h-full w-full object-cover transition-transform duration-300 group-hover:scale-110",
                              isCurrent && isPlaying && "animate-pulse",
                            )}
                          />
                          {isCurrent && isPlaying && (
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <div className="flex gap-1">
                                <div className="w-1 h-3 bg-green-500 animate-music-bar"></div>
                                <div className="w-1 h-3 bg-green-500 animate-music-bar animation-delay-200"></div>
                                <div className="w-1 h-3 bg-green-500 animate-music-bar animation-delay-400"></div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="overflow-hidden">
                          <span
                            className={cn(
                              "font-medium block truncate max-w-[200px] sm:max-w-[300px] md:max-w-[200px] lg:max-w-[300px]",
                              isCurrent && "text-green-500",
                            )}
                          >
                            {track.title}
                          </span>
                          <span className="text-xs text-neutral-400 block truncate max-w-[200px] sm:max-w-[300px] md:max-w-[200px] lg:max-w-[300px]">
                            {track.artistsNames}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="hidden md:table-cell max-w-[150px]">
                      <span className="truncate block hover:text-neutral-200 transition-colors">
                        {track.album?.title || "-"}
                      </span>
                    </td>
                    <td className="pr-4 text-right">
                      <div className="flex items-center justify-end gap-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="invisible h-8 w-8 rounded-full p-0 text-neutral-400 hover:text-green-500 group-hover:visible"
                        >
                          <Heart className="h-5 w-5" />
                        </Button>
                        <span className={cn("min-w-[40px] text-right", isCurrent && "text-green-500")}>
                          {track.duration
                            ? `${Math.floor(track.duration / 60)}:${(track.duration % 60).toString().padStart(2, "0")}`
                            : "--:--"}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="invisible h-8 w-8 rounded-full p-0 text-neutral-400 hover:text-white group-hover:visible"
                        >
                          <MoreHorizontal className="h-5 w-5" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })
=======
                <td colSpan={5} className="py-8 text-center text-neutral-400">
                  No tracks available for this artist.
                </td>
              </tr>
            ) : (
              tracks.map((track, index) => (
                <tr
                  key={track.encodeId || index}
                  className="group h-16 cursor-pointer rounded-md text-neutral-300 transition-colors hover:bg-neutral-800"
                >
                  <td className="pl-4">
                    <div className="flex h-full items-center justify-center w-8">
                      <span className="group-hover:hidden">{(currentPage - 1) * itemsPerPage + index + 1}</span>
                      <Play className="hidden h-4 w-4 fill-white text-white group-hover:block" />
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 min-w-10 overflow-hidden rounded">
                        <img
                          src={track.thumbnail || "/placeholder.svg?height=60&width=60"}
                          alt={track.title}
                          width={60}
                          height={60}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <span className="font-medium block truncate max-w-[200px] sm:max-w-[300px] md:max-w-[200px] lg:max-w-[300px]">
                          {track.title}
                        </span>
                        <span className="text-xs text-neutral-400 block truncate max-w-[200px] sm:max-w-[300px] md:max-w-[200px] lg:max-w-[300px]">
                          {track.artistsNames}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell max-w-[150px]">
                    <span className="truncate block">{track.album?.title || "-"}</span>
                  </td>
                  <td className="hidden lg:table-cell">{formatPlayCount(track.listen_count)}</td>
                  <td className="pr-4 text-right">
                    <div className="flex items-center justify-end gap-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="invisible h-8 w-8 rounded-full p-0 text-neutral-400 hover:text-white group-hover:visible"
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                      <span className="min-w-[40px] text-right">
                        {track.duration
                          ? `${Math.floor(track.duration / 60)}:${(track.duration % 60).toString().padStart(2, "0")}`
                          : "--:--"}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="invisible h-8 w-8 rounded-full p-0 text-neutral-400 hover:text-white group-hover:visible"
                      >
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
            )}
          </tbody>
        </table>

<<<<<<< HEAD
        {/* Track count indicator */}
        {hasData && <div className="mt-4 text-sm text-neutral-400 text-right">{tracks.length} tracks</div>}
=======
        {/* Enhanced Pagination controls */}
        {totalPages > 1 && (
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="pagination-controls flex items-center bg-neutral-800/50 rounded-full p-1">
                {/* First page button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-700/70"
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1 || loading}
                >
                  <SkipBack className="h-4 w-4" />
                </Button>

                {/* Previous page button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-700/70"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1 || loading}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {/* Page numbers */}
                <div className="flex items-center px-2">
                  {getPageNumbers().map((page, index) =>
                    page === "..." ? (
                      <span key={`ellipsis-${index}`} className="px-1 text-neutral-400">
                        •••
                      </span>
                    ) : (
                      <Button
                        key={`page-${page}`}
                        variant="ghost"
                        size="sm"
                        className={`h-8 w-8 rounded-full p-0 font-medium ${
                          currentPage === page
                            ? "bg-white text-black hover:bg-white/90 hover:text-black"
                            : "text-neutral-400 hover:text-white hover:bg-neutral-700/70"
                        }`}
                        onClick={() => handlePageChange(page)}
                        disabled={loading}
                      >
                        {page}
                      </Button>
                    ),
                  )}
                </div>

                {/* Next page button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-700/70"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages || loading}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Last page button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-700/70"
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages || loading}
                >
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Page indicator */}
            <div className="text-sm text-neutral-400">
              Page {currentPage} of {totalPages}
            </div>
          </div>
        )}
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
      </div>
    </div>
  )
}
