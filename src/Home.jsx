import { Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Card from "./components/Card";

import "./Home.css";

import parkSelfie2 from "./assets/12MAY24/IMG_6600.JPG";

export function Home() {
  return (
    <>
      <Navbar />
      <div className="card-tile-list">
        <Link to="/12MAY24">
          <Card img={parkSelfie2} />
        </Link>
      </div>
      <br />
      <Link to="/13MAY24">13MAY24</Link>
      <br />
      <Link to="/14MAY24">14MAY24</Link>
    </>
  );
}
