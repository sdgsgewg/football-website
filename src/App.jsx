import { Routes, Route, Navigate } from "react-router-dom";
import { PlayerProvider } from "./context/PlayerContext";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Player from "./components/player/Player";
import PlayerDetail from "./components/player/PlayerDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <PlayerProvider>
        <Header />
        <ScrollToTop />
        <Routes>
          {/* Initial Route */}
          <Route
            path="/"
            element={<Navigate to="/club/arsenal/men/players/" replace />}
          />

          {/* Team */}
          <Route
            path="/:teamType/:teamName/:playerType/players/"
            element={<Player />}
          />

          {/* Player Detail */}
          <Route
            path="/:teamType/:teamName/:playerType/players/:slug/"
            element={<PlayerDetail />}
          />
        </Routes>
        <Footer />
      </PlayerProvider>
    </>
  );
}

export default App;
