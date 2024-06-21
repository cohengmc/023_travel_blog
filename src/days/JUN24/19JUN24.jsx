import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
import LoneImage from "../../components/LoneImage";

import "../../styles/JUN24/19JUN24.css";

import view1 from "../../assets/JUN24/19JUN24/flowers.JPG";
import view2 from "../../assets/JUN24/19JUN24/moon.JPG";
import view3 from "../../assets/JUN24/19JUN24/view.JPG";

import running from "../../assets/JUN24/19JUN24/IMG_6902.mov";
import vlog from "../../assets/JUN24/19JUN24/IMG_6911.mov";

import sunset1 from "../../assets/JUN24/19JUN24/IMG_6906.mov";
import sunset2 from "../../assets/JUN24/19JUN24/IMG_6916.JPG";
import sunset3 from "../../assets/JUN24/19JUN24/IMG_6912.MOV";

let viewImages = [view3, view1, view2];
let viewAlts = [
  "Mount Lemmon view",
  "Arizona view with cacti and moon",
  "Mount Lemmon view with flowers",
];

let runningContent = [running, vlog];
let runningAlts = ["Will running through the desert", "Running vlog with Will"];

let sunsetContent = [sunset1, sunset3];
let sunsetAlts = ["sunset", "sunset video on mountain"];

export function JUN1924() {
  return (
    <div id="JUN1924">
      <Navbar />
      <div id="content">
        <h1>June 19th 2024</h1>
        <Section
          text="Spent the day recovering from the journey from Austin to Tucson. It
          was nice to relax for a while and have a day indoors. Especially with
          this heat..."
        />
        <Section
          content={viewImages}
          alts={viewAlts}
          text="But I got to appreciate some amazing views!"
        />
        <Section
          content={runningContent}
          alts={runningAlts}
          text="Later that afternoon we had a solid run at Sabino Canyon"
        />
        <LoneImage 
          image={sunset2}
          alt="sunset video"
        />
        <Section
          content={sunsetContent}
          alts={sunsetAlts}
          text="Twas a beautiful Tucson sunset"
        />
      </div>
    </div>
  );
}
