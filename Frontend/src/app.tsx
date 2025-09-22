import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.tsx";
import Home from "./pages/home.tsx";
import SensorSetup from "./pages/sensorSetup.tsx";
import Dataset from "./pages/Dataset.tsx";
import Tutorial from "./pages/tutorial.tsx";
import Team from "./pages/team.tsx";
import Download from "./pages/download.tsx";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sensor-setup" element={<SensorSetup />} />
            <Route path="/dataset" element={<Dataset />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/team" element={<Team />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
