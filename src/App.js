import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Article from "./pages/Article";
import Ask from "./pages/Ask";
import Show from "./pages/Show";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="article" element={<Article />} />
          <Route path="ask" element={<Ask />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="show" element={<Show />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
