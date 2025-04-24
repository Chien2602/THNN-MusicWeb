import { Sidebar } from "../components/sidebar"
import { Player } from "../components/player"
import { LibraryView } from "../components/library-view"

export default function LibraryPage() {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <LibraryView />
      </div>
      <Player />
    </div>
  )
}
