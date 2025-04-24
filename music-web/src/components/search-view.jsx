import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchView() {
  const genres = [
    {
      id: 1,
      name: "Trữ tình và bolero",
      color: "from-pink-500 to-rose-700",
      image:
        "https://photo-zmp3.zmdcdn.me/cover/d/2/e/8/d2e868984110e55b7663620d95fad7ea.jpg",
    },
    {
      id: 2,
      name: "Pop",
      color: "from-purple-500 to-indigo-700",
      image:
        "https://photo-zmp3.zmdcdn.me/cover/8/8/d/7/88d78536b8f46277c2ee517c0c12d1fb.jpg",
    },
    {
      id: 3,
      name: "Hip-Hop",
      color: "from-yellow-500 to-amber-700",
      image:
        "https://photo-zmp3.zmdcdn.me/cover/2/f/6/d/2f6d917279e36c97d559b8eef2da9457.jpg",
    },
    {
      id: 4,
      name: "Rock",
      color: "from-red-500 to-rose-800",
      image:
        "https://photo-zmp3.zmdcdn.me/cover/0/e/4/f/0e4f92627b1250209982992ade5f58a7.jpg",
    },
    {
      id: 5,
      name: "R&B",
      color: "from-blue-500 to-indigo-800",
      image:
        "https://photo-zmp3.zmdcdn.me/cover/8/5/7/6/8576c5b5e0e59d6cd626d0d6004ed0b9.jpg",
    },
    {
      id: 6,
      name: "K-Pop",
      color: "from-green-500 to-emerald-700",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/e/8/9/f/e89f65a5fe5a5aa2307706ffb2a6e5ea.jpg",
    },
    {
      id: 7,
      name: "Indie",
      color: "from-orange-500 to-amber-800",
      image:
        "https://photo-zmp3.zmdcdn.me/cover/9/4/d/7/94d7d5f44374e96627a95396aecc032f.jpg",
    },
    {
      id: 8,
      name: "EDM",
      color: "from-teal-500 to-cyan-700",
      image:
        "https://photo-zmp3.zmdcdn.me/cover/4/f/8/0/4f802f2508cc54ff7d82a651564a9e36.jpg",
    },
    {
      id: 9,
      name: "Acoustic",
      color: "from-indigo-500 to-blue-800",
      image:
        "https://photo-zmp3.zmdcdn.me/cover/e/c/1/a/ec1ae23452afdf418940dcb0775470db.jpg",
    },
    {
      id: 10,
      name: "Nhạc Phim",
      color: "from-rose-500 to-pink-800",
      image:
        "https://photo-zmp3.zmdcdn.me/cover/2/6/f/d/26fd8cc26f31cc85d61742b37f9ffd3a.jpg",
    },
    {
      id: 11,
      name: "Latin",
      color: "from-amber-500 to-yellow-700",
      image:
        "https://photo-zmp3.zmdcdn.me/cover/6/1/f/c/61fc360b78d18b9d71dcd429f57eacc1.jpg",
    },
    {
      id: 12,
      name: "Jazz",
      color: "from-cyan-500 to-teal-700",
      image:
        "https://photo-zmp3.zmdcdn.me/cover/d/0/2/3/d0232877a66df92fcb7cd44170126948.jpg",
    },
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900/80 to-black p-6 overflow-auto animate-fade-in">
      <div className="mb-6">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <Input
            placeholder="Bạn muốn nghe gì?"
            className="bg-white/10 border-none pl-10 py-6 text-white placeholder:text-gray-400 focus-visible:ring-0 rounded-full shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 animate-slide-up">
          Duyệt tất cả
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {genres.map((genre, index) => (
            <div
              key={genre.id}
              className="rounded-lg overflow-hidden relative cursor-pointer transition-all hover:scale-105 shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-90`}
              ></div>
              <div className="absolute bottom-0 right-0 opacity-30 text-6xl font-bold rotate-12 translate-x-2 translate-y-2">
                <img src={genre.image} alt="" />
              </div>
              <div className="relative z-10 p-5 h-52 flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-white">{genre.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-white/80 text-sm">Thể loại</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
