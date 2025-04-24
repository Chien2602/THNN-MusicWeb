import {
  Home,
  Search,
  Library,
  PlusCircle,
  Heart,
  History,
} from "lucide-react";
import { Link } from "react-router";
import logo from "../assets/react.svg";

export function Sidebar() {
  return (
    <div className="w-60 bg-black p-6 hidden md:flex flex-col h-full border-r border-gray-800/30">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-6 flex items-center">
          {/* <svg viewBox="0 0 24 24" width="32" height="32" className="mr-2 text-green-500">
            <path
              fill="currentColor"
              d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
            />
          </svg> */}
          <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
          MusicWeb
        </h1>
        <nav className="space-y-4">
          <Link
            to="/"
            className="flex items-center gap-3 text-white hover:text-green-500 transition group"
          >
            <div className="bg-white/5 p-2 rounded-md group-hover:bg-white/10 transition">
              <Home size={20} />
            </div>
            <span className="font-medium">Trang chủ</span>
          </Link>
          <Link
            to="/search"
            className="flex items-center gap-3 text-gray-400 hover:text-white transition group"
          >
            <div className="bg-white/5 p-2 rounded-md group-hover:bg-white/10 transition">
              <Search size={20} />
            </div>
            <span className="font-medium">Tìm kiếm</span>
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-2 text-white hover:text-green-500 transition cursor-pointer mb-4 group">
        <div className="bg-white/10 p-2 rounded-md group-hover:bg-green-500/20 transition">
          <PlusCircle size={18} />
        </div>
        <span className="font-medium">Tạo playlist</span>
      </div>
      <div className="flex items-center gap-2 text-white mb-4 hover:text-green-500 transition cursor-pointer group">
        <div className="bg-gradient-to-br from-purple-500/30 to-blue-500/30 p-2 rounded-md group-hover:from-purple-500/40 group-hover:to-blue-500/40 transition">
          <Heart size={18} className="text-purple-300" />
        </div>
        <span className="font-medium">Bài hát đã thích</span>
      </div>
      <div className="flex items-center gap-2 text-white hover:text-green-500 transition cursor-pointer group">
        <div className="bg-gradient-to-br from-white/30 to-green-500/30 p-2 rounded-md group-hover:from-purple-500/40 group-hover:to-blue-500/40 transition">
          <History size={18} className="text-purple-300" />
        </div>
        <span className="font-medium">Bài hát đã nghe</span>
      </div>

      <div className="mt-6 border-t border-gray-800/30 pt-6 flex-1 overflow-auto">
        <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-medium">
          Playlist của bạn
        </h3>
        <ul className="space-y-3">
          {[
            "Nhạc Việt Hay Nhất",
            "Chill Mix",
            "Top Hits 2023",
            "Acoustic Favorites",
            "Workout Mix",
            "Nhạc Trữ Tình",
            "V-Pop Rising",
            "Rap Việt",
          ].map((playlist, index) => (
            <li
              key={playlist}
              className="text-gray-400 hover:text-white transition cursor-pointer truncate text-sm py-1"
            >
              {playlist}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
