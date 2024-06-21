import Navbar from "../../components/Navbar";
import Gallery from "../../components/Gallery";

import parkSelfie2 from "../assets/MAY24/12MAY24/IMG_6600.JPG";

const content = import.meta.glob(
  [
    "../assets/MAY24/14MAY24/*.MOV",
    "../assets/MAY24/14MAY24/*.PNG",
    "../assets/MAY24/14MAY24/*.JPG",
  ],
  {
    as: "url",
    import: "default",
  }
);

let imgArray = [];
let vidArray = [];

for (const path in content) {
  content[path]().then((mod) => {
    console.log(mod);
    if (mod.includes("MOV")) {
      vidArray.push(mod);
    } else {
      imgArray.push(mod);
    }
  });
}

export function MAY1424() {
  return (
    <div>
      <Navbar />
      <h1>14MAY24</h1>
      <div>
        {imgArray.map((image, int) => (
          <img key={int} src={image} alt="" style={{ width: "400px" }} />
        ))}

        {vidArray.map((video, int) => (
          <video
            controls
            key={int}
            src={video}
            type="video/mp4"
            style={{ width: "400px" }}
          ></video>
        ))}
      </div>
    </div>
  );
}
