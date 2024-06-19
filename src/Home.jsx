import { Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

import "./Home.css";
import data from "./data";

export function Home() {
  const cards = data.map((item) => {
    return (
      <Link to={item.link}>
        <Card
          img={item.img}
          alt={item.alt}
          title={item.title}
          date={item.date}
          location={item.location}
          clickable={item.clickable}
          vertical={item.vertical}
          paddingBottom={item.paddingBottom}
          paddingLeft={item.paddingLeft}
          paddingRight={item.paddingRight}
        />
      </Link>
    );
  });

  return (
    <div id="home">
      <Navbar />
      <div className="card-tile-list">{cards}</div>
      <Footer />
    </div>
  );
}
