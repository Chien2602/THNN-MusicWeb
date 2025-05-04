import {Link} from "react-router"
import { Play, Clock, Calendar } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { vi } from "date-fns/locale"

// Mock data for listening history
const listeningHistory = [
  {
    id: 1,
    title: "Hoa Nở Không Màu",
    artist: "Hoài Lâm",
    album: "Single",
    cover: "/placeholder.svg?height=40&width=40",
    timestamp: new Date(2023, 4, 3, 14, 30),
  },
  {
    id: 2,
    title: "Có Chàng Trai Viết Lên Cây",
    artist: "Phan Mạnh Quỳnh",
    album: "Single",
    cover: "/placeholder.svg?height=40&width=40",
    timestamp: new Date(2023, 4, 3, 13, 15),
  },
  {
    id: 3,
    title: "Chạy Ngay Đi",
    artist: "Sơn Tùng M-TP",
    album: "Single",
    cover: "/placeholder.svg?height=40&width=40",
    timestamp: new Date(2023, 4, 3, 10, 45),
  },
  {
    id: 4,
    title: "Hãy Trao Cho Anh",
    artist: "Sơn Tùng M-TP",
    album: "Sky Tour",
    cover: "/placeholder.svg?height=40&width=40",
    timestamp: new Date(2023, 4, 2, 20, 10),
  },
  {
    id: 5,
    title: "Nơi Này Có Anh",
    artist: "Sơn Tùng M-TP",
    album: "m-tp M-TP",
    cover: "/placeholder.svg?height=40&width=40",
    timestamp: new Date(2023, 4, 2, 19, 30),
  },
  {
    id: 6,
    title: "Có Chắc Yêu Là Đây",
    artist: "Sơn Tùng M-TP",
    album: "Single",
    cover: "/placeholder.svg?height=40&width=40",
    timestamp: new Date(2023, 4, 2, 18, 45),
  },
  {
    id: 7,
    title: "Lạc Trôi",
    artist: "Sơn Tùng M-TP",
    album: "m-tp M-TP",
    cover: "/placeholder.svg?height=40&width=40",
    timestamp: new Date(2023, 4, 1, 21, 20),
  },
]

export default function HistoryPage() {
  return (
    <div className=" bg-gray-900 w-full text-white p-6 rounded-lg shadow-lg overflow-y-auto">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-60 h-60 bg-gradient-to-br from-purple-600 to-blue-400 flex items-center justify-center rounded shadow-lg">
          <Clock className="h-28 w-28 text-white" />
        </div>
        <div>
          <div className="text-sm font-bold uppercase mb-2">Playlist</div>
          <h1 className="text-7xl font-bold mb-6">Lịch Sử Nghe Nhạc</h1>
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="font-bold text-white">Tên người dùng</span>
            <span className="mx-1">•</span>
            <span>{listeningHistory.length} bài hát</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-blue-900/20 to-transparent p-4 rounded-t-lg">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-muted-foreground">
              <th className="w-12 pb-2">#</th>
              <th className="pb-2">Tiêu đề</th>
              <th className="pb-2">Album</th>
              <th className="pb-2">
                <Calendar className="h-4 w-4 inline" />
              </th>
            </tr>
          </thead>
          <tbody>
            {listeningHistory.map((song, index) => (
              <tr key={song.id} className="group hover:bg-white/10">
                <td className="py-3 px-2">
                  <div className="flex items-center justify-center w-8 h-8 group-hover:hidden">{index + 1}</div>
                  <div className="hidden group-hover:flex items-center justify-center w-8 h-8">
                    <Play className="h-4 w-4" />
                  </div>
                </td>
                <td className="py-3">
                  <div className="flex items-center">
                    <img
                      src={song.cover || "/placeholder.svg"}
                      alt={song.title}
                      width={40}
                      height={40}
                      className="mr-4 rounded"
                    />
                    <div>
                      <Link href={`/lyrics/${song.id}`} className="hover:underline">
                        <div className="font-medium">{song.title}</div>
                      </Link>
                      <div className="text-muted-foreground">{song.artist}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-muted-foreground">{song.album}</td>
                <td className="py-3 text-muted-foreground">
                  {formatDistanceToNow(song.timestamp, {
                    addSuffix: true,
                    locale: vi,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
