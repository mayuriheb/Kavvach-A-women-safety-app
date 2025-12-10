import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Helplines from "./pages/Helplines";
import Locations from "./pages/Locations";
import Chat from "./pages/Chat";
import "./index.css";

export default function App() {
  return (
    <Router>
      <NavBar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/helplines" element={<Helplines />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

