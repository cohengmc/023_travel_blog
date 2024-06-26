import Navbar from "../../components/Navbar";
import Section from "../../components/Section";

import "../../styles/JUN24/22JUN24.css";

import bike1 from "../../assets/JUN24/22JUN24/IMG_3002.jpg";
import bike2 from "../../assets/JUN24/22JUN24/IMG_3019.jpg";

let bikeImages = [bike1, bike2];
let bikeAlts = [
  "Geoff on a mountain bike",
  "Selfie of the boys mountain biking",
];

import breakfast from "../../assets/JUN24/22JUN24/IMG_6954.JPG";

import view1 from "../../assets/JUN24/22JUN24/IMG_3036.jpg";
import view2 from "../../assets/JUN24/22JUN24/IMG_6982.JPG";

let lemon1 = [view1, view2];
let lemonAlts1 = [
  "Geoff looking out from the mountain",
  "Will looking out from the mountain",
];

import lemon from "../../assets/JUN24/22JUN24/IMG_6964.JPG";

import vid1 from "../../assets/JUN24/22JUN24/IMG_6990.MOV";
import vid2 from "../../assets/JUN24/22JUN24/IMG_6986.MOV";
import vid3 from "../../assets/JUN24/22JUN24/IMG_6956.MOV";

let vids = [vid1, vid2, vid3];
let vidsAlts = [
  "Rain on top of Mt. Lemmon",
  "View from the top of Mt. Lemon",
  "Geoff reflection in the car mirror",
];

export function JUN2224() {
  return (
    <div id="JUN2224">
      <Navbar />
      <div id="content">
        <h1 class="shadow date">June 22nd 2024</h1>
        <Section text="Twas a big adventure day with Willy Doo!" />

        <Section
          content={bikeImages}
          alts={bikeAlts}
          text="This ride really pushed me out of my comfort zone. There were some huge drops and hills where you don't have time to think. So thrilling and such a workout (my quads were hella sore the next day)"
        />
        <Section
          content={[breakfast]}
          alts={"Breakfast with the boys"}
          text="Had some really good  brunch at Baja Cafe"
        />
        <Section
          content={[lemon]}
          alts="view from Mt. Lemmon"
        />
        <Section
          content={lemon1}
          alts={lemonAlts1}
          text="The views on Mt. Lemmon were insane!"
        />
        <Section
          content={vids}
          alts={vidsAlts}
          text="On a rainy day with over 9000 feet of elevation, Arizona looked like the Pacific Northeast! It was pretty sweet!"
        />
      </div>
    </div>
  );
}
