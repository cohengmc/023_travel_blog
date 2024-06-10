import packingItems from "../assets/13MAY24/IMG_6282.JPG";
import packedBag from "../assets/13MAY24/IMG_6283.JPG";

import Navbar from ".././components/Navbar";

import "../styles/13MAY24.css";

export function MAY1324() {

  function backpackClicked(event){
    document.getElementById("backpack").style.display = "none";
    document.getElementById("clickMe").style.display = "none";
    document.getElementById("pack-items").style.display = "inline";
  }

  return (
    <div id="MAY1324">
      <Navbar />
      <div id="content">
        <h2 id="clickMe">Click bag to unpack!</h2>
        <img
          id="backpack"
          src={packedBag}
          alt="Geoff's bag packed up the night before he leaves"
          onClick={backpackClicked}
        />
        <img
          id="pack-items"
          src={packingItems}
          alt="All of the things Geoff packed for his travels layed out on a bed"
        />
      </div>
    </div>
  );
}
