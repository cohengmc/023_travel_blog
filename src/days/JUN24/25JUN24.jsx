import Navbar from "../../components/Navbar";
import Section from "../../components/Section";

import "../../styles/JUN24/25JUN24.css";

import view1 from "../../assets/JUN24/25JUN24/IMG_7131.JPG";
import view2 from "../../assets/JUN24/25JUN24/IMG_7135.JPG";
import view3 from "../../assets/JUN24/25JUN24/IMG_7138.JPG";

let viewImages = [view3, view1, view2];
let viewAlts = ["Palace of Arts", "Downtwon SF", "Golden Gate Bridge view"];

import tramVideo from "../../assets/JUN24/25JUN24/IMG_7141.MOV";

import food1 from "../../assets/JUN24/25JUN24/IMG_7144.JPG";
import food2 from "../../assets/JUN24/25JUN24/IMG_7146.JPG";

let foodImages = [food1, food2];
let foodAlts = ["Bakery in Chinatown", "Baked goods breakfast in Chinatown"];


export function JUN2524() {
  return (
    <div id="JUN2524">
      <Navbar />
      <div id="content">
        <h1 class="shadow date">June 25th 2024</h1>
        <Section text="Slept in and then went for a run! On my run I ended up bumping into a couple from Scotland! They also got into SF the night before and were exploring the city by jogging!" />

        <Section
          content={viewImages}
          alts={viewAlts}
          text="We ended up running together for about an hour and caught some amazing views on the run!"
        />

        <Section
          content={[tramVideo]}
          alts="sunset video"
          text="Caught some amazing views on the run!"
        />

        <Section
          content={foodImages}
          alts={foodAlts}
          text="I capped of the run with some yummy baked goods from Chinatown!"
        />
      </div>
    </div>
  );
}
