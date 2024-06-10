import { Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

import "./Home.css";

import parkSelfie2 from "./assets/12MAY24/IMG_6600.JPG";
import packingStuff from "./assets/13MAY24/IMG_6282.JPG";
import dancingPic from "./assets/14MAY24/IMG_6523.PNG";

export function Home() {
  return (
    <div id="home">
      <Navbar />
      <div className="card-tile-list">
        <Link to="/14MAY24">
          <Card
            vertical = { true }
            img={dancingPic}
            paddingBottom= "50px"
            alt="Geoff dancing Salsa on the docks in Boston"
            title="Back in Boston!"
            date="14 May 2024"
            location="Pittsburgh → Boston"
            clickable={true}
          />
        </Link>
        <Link to="/13MAY24">
          <Card
            img={packingStuff}
            paddingRight="20px"
            alt="Packing items layed out on bed"
            title="Packing List"
            date="13 May 2024"
            location="Pittsburgh"
            clickable={true}
          />
        </Link>
        <Link to="/12MAY24">
          <Card
            img={parkSelfie2}
            paddingLeft="60px"
            alt="Selfie of Geoff V and Shunshun"
            title="Fam Dinner"
            date="12 May 2024"
            location="Pittsburgh"
            clickable={true}
          />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
