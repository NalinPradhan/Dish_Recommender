import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Me from "./pages/Me";
import CircularNavbar from "./components/spectrumui/circularnavbar";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<Me />} />
        </Routes>
        <CircularNavbar />
      </div>
    </Router>
  );
}

export default App;
