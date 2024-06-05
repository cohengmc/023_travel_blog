import packingItems from "../assets/13MAY24/IMG_6282.JPG";

import Navbar from ".././components/Navbar";

export function MAY1324() {
  return (
    <div>
      <Navbar />
      <h1>13MAY24</h1>
      <img
        src={packingItems}
        alt="All of the things Geoff packed for his travels layed out on a bed"
      />
    </div>
  );
}
