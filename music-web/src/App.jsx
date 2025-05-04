import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ThemeProvider } from "./components/theme-provider";
import { PlayerProvider } from "./components/player-provider";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import LibraryPage from "./pages/LibraryPage";
import RegisterPage from "./components/register";
import LoginPage from "./components/login";
import PlaylistPage from "./pages/PlaylistPage";
import ArtistPage from "./pages/ArtistPage";
import FavoritesPage from "./pages/FavoritePage";
import HistoryPage from "./pages/HistoryPage";
import Player from "./components/player";

function App() {
  return (
    <div className="h-screen bg-black overflow-hidden text-white flex flex-col">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" className="h-screen bg-black overflow-hidden text-white flex flex-col">
      <PlayerProvider>
        {" "}
        {/* Bọc Router với PlayerProvider */}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/playlist" element={<PlaylistPage />} />
            <Route path="/artist" element={<ArtistPage />} />
            <Route path="/favorite" element={<FavoritesPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </Router>
        <div className="sticky bottom-0 left-0 right-0 z-10 bg-black border-t border-neutral-800">
          <Player />
        </div>
      </PlayerProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;
