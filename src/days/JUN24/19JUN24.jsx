import Navbar from "../../components/Navbar";

import "../../styles/JUN24/19JUN24.css";

import view1 from "../../assets/JUN24/19JUN24/flowers.JPG";
import view2 from "../../assets/JUN24/19JUN24/moon.JPG";
import view3 from "../../assets/JUN24/19JUN24/view.JPG";

import running from "../../assets/JUN24/19JUN24/IMG_6902.mov";
import vlog from "../../assets/JUN24/19JUN24/IMG_6911.mov";

export function JUN1924() {
  return (
    <div id="JUN1924">
      <Navbar />
      <div id="content">
        <h1>June 19th 2024</h1>
        <p class="text">
          Spent the day recovering from the journey from Austin to Tucson. It
          was nice to relax for a while and have a day indoors. Especially with
          this heat...
        </p>
        <section>
          <div id="viewGallery">
            <img src={view3} alt="Mount Lemmon and flowers" />
            <img src={view1} alt="Mount Lemmon and flowers" />
            <img src={view2} alt="Mount Lemmon and flowers" />
          </div>
          <p class="text">But I got to appreciate some amazing views!</p>
        </section>
        <section>
          <div className="movies">
            <div>
              <video src={running} controls></video>
            </div>
            <div>
              <video src={vlog} controls></video>
            </div>
          </div>
          <p class="text">
            Later that afternoon we had a solid run at Sabino Canyon
          </p>
        </section>
      </div>
    </div>
  );
}
