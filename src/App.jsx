import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { MAY1224 } from "./days/12MAY24";
import { MAY1324 } from "./days/13MAY24";
import { MAY1424 } from "./days/14MAY24";
import { MAY1524 } from "./days/15MAY24";
import { JUN1124 } from "./days/11JUN24";
import { JUN1924 } from "./days/19JUN24";


import { Error } from "./Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/12May24" element={<MAY1224 />} />
        <Route path="/13May24" element={<MAY1324 />} />
        <Route path="/14May24" element={<MAY1424 />} />
        <Route path="/15May24" element={<MAY1524 />} />
        <Route path="/11Jun24" element={<JUN1124 />} />
        <Route path="/19Jun24" element={<JUN1924 />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
