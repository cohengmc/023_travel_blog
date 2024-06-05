import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { MAY1224 } from "./days/12MAY24";
import { MAY1324 } from "./days/13MAY24";
import { MAY1424 } from "./days/14MAY24";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/12May24" element={<MAY1224 />} />
        <Route path="/13May24" element={<MAY1324 />} />
        <Route path="/14May24" element={<MAY1424 />} />
      </Routes>
    </Router>
  );
}

export default App;
