<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router";
=======
import { BrowserRouter as Router, Routes, Route } from "react-router";
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
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
<<<<<<< HEAD
import ProtectedRoute from "./ProtectedRoute";

function AppContent() {
  const location = useLocation();
  const hiddenPlayerRoutes = ["/register", "/login"];

  const shouldHidePlayer = hiddenPlayerRoutes.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/library"
          element={
            <ProtectedRoute>
              <LibraryPage />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/playlist"
          element={
            <ProtectedRoute>
              <PlaylistPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/artist"
          element={
            <ProtectedRoute>
              <ArtistPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorite"
          element={
            <ProtectedRoute>
              <FavoritesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <HistoryPage />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!shouldHidePlayer && (
        <div className="sticky bottom-0 left-0 right-0 z-10 bg-black border-t border-neutral-800">
          <Player />
        </div>
      )}
    </>
  );
}
=======
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6

function App() {
  return (
    <div className="h-screen bg-black overflow-hidden text-white flex flex-col">
<<<<<<< HEAD
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <PlayerProvider>
          <Router>
            <AppContent />
          </Router>
        </PlayerProvider>
      </ThemeProvider>
=======
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
>>>>>>> 64422df33bb43e306eb18bc7d1b6c6a9592c95d6
    </div>
  );
}

export default App;
