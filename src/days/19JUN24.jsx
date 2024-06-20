import Navbar from "../components/Navbar";

import "../styles/19JUN24.css";

const content = import.meta.glob(
  [
    "../assets/JUN24/19JUN24/*.MOV",
    "../assets/JUN24/19JUN24/*.PNG",
    "../assets/JUN24/19JUN24/*.JPG",
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

 let theIMG = imgArray.filter((link) => link.includes("6890"));
 
 console.log("the img: " + theIMG);

export function JUN1924() {
  return (
    <div id="JUN1924">
      <Navbar />
      <div id="content">
        <h1>June 19th 2024</h1>
        <img src={imgArray[0]} alt="" style={{ width: "400px" }} />
      </div>
    </div>
  );
}
