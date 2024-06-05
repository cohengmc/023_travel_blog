import { Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Card from "./components/Card";

export function Home() {
  return (
    <>
      <Navbar />
      <Card />
      <Link to="/12MAY24">12MAY24</Link>
      <br />
      <Link to="/13MAY24">13MAY24</Link>
      <br />
      <Link to="/14MAY24">14MAY24</Link>
    </>
  );
}
