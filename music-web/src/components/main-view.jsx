import { Heart, MoreHorizontal, Play, ChevronRight, User } from "lucide-react";
export function MainView() {
  const songs = [
    {
      id: 1,
      title: "Hẹn Gặp Em Dưới Ánh Trăng",
      artist: "HIEUTHUHAI",
      album: "HGEDAT",
      duration: "3:34",
      plays: "1,234,567",
      color: "from-purple-600 to-blue-400",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/2/6/2/7/2627c10c924237d129a289cc89cd695c.jpg",
    },
    {
      id: 2,
      title: "Chìm Sâu",
      artist: "RPT MCK, Trung Trần",
      album: "99%",
      duration: "3:52",
      plays: "2,345,678",
      color: "from-green-500 to-emerald-700",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/4/1/0/e4105853aec8b03b630c931cda9e88a4.jpg",
    },
    {
      id: 3,
      title: "Waiting For You",
      artist: "MONO",
      album: "22",
      duration: "4:12",
      plays: "3,456,789",
      color: "from-red-500 to-orange-600",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/e/7/7/2/e772358978fef8a02eefd34f6a4ca6f3.jpg",
    },
    {
      id: 4,
      title: "Có Chơi Có Chịu",
      artist: "KARIK, ONLY C",
      album: "CCCC",
      duration: "3:45",
      plays: "1,987,654",
      color: "from-blue-600 to-cyan-400",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/8/9/2/2892c3530e93895b6605cea040c749e0.jpg",
    },
    {
      id: 5,
      title: "Ngủ Một Mình",
      artist: "HIEUTHUHAI, Negav",
      album: "Ai Cũng Phải Bắt Đầu Từ Đâu Đó",
      duration: "3:21",
      plays: "2,876,543",
      color: "from-pink-500 to-rose-600",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/d/3/4/a/d34a7cee7815d7b7a0f6a9efd74f6389.jpg",
    },
    {
      id: 6,
      title: "Cứ Chill Thôi",
      artist: "Chillies, Suni Hạ Linh",
      album: "Cứ Chill Thôi",
      duration: "4:30",
      plays: "3,765,432",
      color: "from-indigo-600 to-violet-500",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/a/d/e/c/adec6ae6c1d778209f1be11b6781a847.jpg",
    },
  ];

  const featuredPlaylists = [
    {
      id: 1,
      title: "V-Pop 2025 nghe gì?",
      description: "Những bài hát Việt Nam được nghe nhiều nhất hiện nay",
      color: "from-purple-600 to-blue-700",
      gradient: "bg-gradient-to-br from-purple-600/20 to-blue-700/20",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/0/7/b/807bfd9357bd8e5fae2974a5d1519915.jpg",
    },
    {
      id: 2,
      title: "Chill Mix",
      description: "Thư giãn với những giai điệu nhẹ nhàng",
      color: "from-green-500 to-emerald-700",
      gradient: "bg-gradient-to-br from-green-500/20 to-emerald-700/20",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/6/a/2/56a22b387f9e926e70fb5751374c2e66.jpg",
    },
    {
      id: 3,
      title: "Playlist này chill phết",
      description: "Những bản hit đình đám nhất năm 2024",
      color: "from-red-500 to-orange-700",
      gradient: "bg-gradient-to-br from-red-500/20 to-orange-700/20",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/2/9/5/d/295d1acf510893079a8d92cc0bc92120.jpg",
    },
    {
      id: 4,
      title: "Acoustic Favorites",
      description: "Những bản acoustic hay nhất mọi thời đại",
      color: "from-blue-500 to-cyan-700",
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-700/20",
      image:
        "https://photo-playlist-zmp3.zmdcdn.me/s3/user-playlist?src=HavwqN7EvKCI1og5AfZbHm1SUzXfcELOLHP-spd9umzLHdY7D9ZWKbX3ADTdpEDU3nuits-NtLu2I4JOR9BQNm5N7fy_dfmD2XnSrcVLo4HTKH2HTicH5W0H495gp8OP1nCSo6dBqqy64Kl6EyhM55GPGSKwbzXDLXyGeZx7XYDI6nYZEiIOUHD85ELepzCxMXTViI6VddST1aFeTiA8TnrCHwPmbj0l44KV-toQrNeS41gfTCo4BKj56gqdduHy8KKU_qgPWNyYInxX2yxNStu75Qf9XuauAav6_XBHYJmu5HIZ1D69TcHS5Q9SXDfmOrP5-GdPt2ypK1IcKugDSpDJ6_SEWUfsP5bozGM7wtPbGY-sPo9z&size=thumb/240_240",
    },
    {
      id: 5,
      title: "Workout Mix",
      description: "Năng lượng cho buổi tập của bạn",
      color: "from-yellow-500 to-amber-700",
      gradient: "bg-gradient-to-br from-yellow-500/20 to-amber-700/20",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/c/4/7/3/c47312bc4a7876ab8fcaedb65d0c7363.jpg",
    },
    {
      id: 6,
      title: "Nhạc bolero",
      description: "Những bản nhạc bolero hay nhất",
      color: "from-pink-500 to-rose-700",
      gradient: "bg-gradient-to-br from-pink-500/20 to-rose-700/20",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/9/f/9/7/9f97821c4ba942b12e206dc5d5252b88.jpg",
    },
  ];

  const topArtists = [
    {
      id: 1,
      name: "Sơn Tùng M-TP",
      followers: "2.5M",
      color: "from-blue-500 to-purple-600",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/5/9/6/9/59696c9dba7a914d587d886049c10df6.jpg",
    },
    {
      id: 2,
      name: "HIEUTHUHAI",
      followers: "1.8M",
      color: "from-green-500 to-teal-600",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/e/c/6/c/ec6cb19cfded44f239c48132ba77082f.jpg",
    },
    {
      id: 3,
      name: "Hoàng Thùy Linh",
      followers: "1.2M",
      color: "from-pink-500 to-red-600",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/3/7/b/a37b96a77f40eaeeafa8a8b22a4ff114.jpg",
    },
    {
      id: 4,
      name: "Đen Vâu",
      followers: "2.1M",
      color: "from-gray-700 to-gray-900",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/0/9/e/c/09ec67133c4ff1e7c49e79aea4980ede.jpg",
    },
    {
      id: 5,
      name: "Bích Phương",
      followers: "1.5M",
      color: "from-yellow-500 to-amber-600",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/7/e/7/3/7e736bd660db22b75110df5605c180fe.jpg",
    },
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-green-900/40 via-black/90 to-black p-6 overflow-auto animate-fade-in">
      <div className="flex items-center justify-end gap-2 mb-6">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black hover:bg-white/20 transition-all cursor-pointer shadow-md">
          <User size={20} />
        </div>
        <span className="text-white font-medium select-none">
          Hi <b className="font-bold text-red-400 select-none">John</b>
        </span>
      </div>

      {/* Welcome section with time-based greeting */}
      <div className="mb-6 mt-10">
        <h1 className="text-3xl font-bold text-white mb-6">
          {new Date().getHours() < 12
            ? "Chào buổi sáng"
            : new Date().getHours() < 18
            ? "Chào buổi chiều"
            : "Chào buổi tối"}
        </h1>

        {/* Recently played section with horizontal scroll */}
      </div>

      {/* Featured playlists section */}
      <section className="mb-10 mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Playlist nổi bật</h2>
          <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
            Xem tất cả <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {featuredPlaylists.map((playlist, index) => (
            <div
              key={playlist.id}
              className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all cursor-pointer group playlist-card animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative mb-4 overflow-hidden rounded-md shadow-lg">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${playlist.color} opacity-90`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={playlist.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square"></div>
                <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-xl play-button">
                  <Play size={20} className="text-black ml-0.5" />
                </button>
              </div>
              <h3 className="font-medium text-white mb-1 truncate">
                {playlist.title}
              </h3>
              <p className="text-sm text-gray-400 line-clamp-2">
                {playlist.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Top artists section */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Nghệ sĩ nổi bật</h2>
          <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
            Xem tất cả <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {topArtists.map((artist, index) => (
            <div
              key={artist.id}
              className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all cursor-pointer group animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative mb-4 overflow-hidden rounded-full shadow-lg">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${artist.color} opacity-90`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={artist.image} alt="" />
                </div>
                <div className="aspect-square"></div>
                <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-xl play-button">
                  <Play size={20} className="text-black ml-0.5" />
                </button>
              </div>
              <h3 className="font-medium text-white mb-1 text-center">
                {artist.name}
              </h3>
              <p className="text-sm text-gray-400 text-center">
                Nghệ sĩ • {artist.followers} người theo dõi
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Top tracks section */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Bài hát thịnh hành</h2>
          <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
            Xem tất cả <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
          {songs.map((song, index) => (
            <div
              key={song.id}
              className="flex items-center p-2 rounded-md hover:bg-white/10 group transition-colors cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="mr-4 text-gray-400 w-4 text-center">
                {index + 1}
              </div>
              <div className="relative h-12 w-12 mr-3 overflow-hidden rounded">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${song.color} opacity-80`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
                  <img src={song.image} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium truncate">{song.title}</p>
                <p className="text-sm text-gray-400 truncate">{song.artist}</p>
              </div>
              <div className="ml-4 flex items-center gap-3">
                <span className="text-gray-400 text-sm">{song.duration}</span>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart size={16} className="text-gray-400 hover:text-white" />
                </button>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal
                    size={16}
                    className="text-gray-400 hover:text-white"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New releases section */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Phát hành mới</h2>
          <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
            Xem tất cả <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {songs.map((song, index) => (
            <div
              key={`new-${song.id}`}
              className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all cursor-pointer group playlist-card animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative mb-4 overflow-hidden rounded-md shadow-lg">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${song.color} opacity-90`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={song.image} className="w-full" alt="" srcset="" />
                </div>
                <div className="aspect-square"></div>
                <div className="absolute top-2 left-2 bg-black/50 text-xs text-white px-2 py-1 rounded-full">
                  Mới
                </div>
                <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-xl play-button">
                  <Play size={20} className="text-black ml-0.5" />
                </button>
              </div>
              <h3 className="font-medium text-white mb-1 truncate">
                {song.title}
              </h3>
              <p className="text-sm text-gray-400 truncate">
                Single • {song.artist}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Genres section */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">Thể loại</h2>
          <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
            Xem tất cả <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-2 h-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {[
            {
              name: "Hip-Hop",
              color: "from-yellow-500 to-amber-700",
              image:
                "https://photo-zmp3.zmdcdn.me/cover/2/f/6/d/2f6d917279e36c97d559b8eef2da9457.jpg",
            },
            {
              name: "R&B",
              color: "from-blue-500 to-indigo-800",
              image:
                "https://photo-zmp3.zmdcdn.me/cover/8/5/7/6/8576c5b5e0e59d6cd626d0d6004ed0b9.jpg",
            },
            {
              name: "EDM",
              color: "from-teal-500 to-cyan-700",
              image:
                "https://photo-zmp3.zmdcdn.me/cover/4/f/8/0/4f802f2508cc54ff7d82a651564a9e36.jpg",
            },
            {
              name: "Acoustic",
              color: "from-indigo-500 to-blue-800",
              image:
                "https://photo-zmp3.zmdcdn.me/cover/e/c/1/a/ec1ae23452afdf418940dcb0775470db.jpg",
            },
            {
              name: "Nhạc Việt bất hủ",
              color: "from-indigo-500 to-green-800",
              image:
                "https://photo-zmp3.zmdcdn.me/cover/d/3/1/c/d31c98f8fbc04aaceb04af660260663c.jpg",
            },
            {
              name: "Jazz",
              color: "from-red-500 to-blue-800",
              image:
                "https://photo-zmp3.zmdcdn.me/cover/d/0/2/3/d0232877a66df92fcb7cd44170126948.jpg",
            },
          ].map((genre, index) => (
            <div
              key={genre.name}
              className="rounded-lg overflow-hidden relative cursor-pointer transition-all hover:scale-105 shadow-lg animate-slide-up h-32"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-70`}
              ></div>

              {/* Background image */}
              <img
                src={genre.image}
                alt={genre.name}
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />

              {/* Content */}
              <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-white">{genre.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer with spacing */}
      <div className="h-20"></div>
    </div>
  );
}
