import geoffIcon from "../assets/geoff_character.gif";
import "./Navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      <div id="header">
        <a href="/">
          <img
            src={geoffIcon}
            alt="A cartoon caricature of Geoff with a smirk and peace sign that shakes back and forfth"
          />
          <div id="header-text">
            <h1>Geoff Travels</h1>
          </div>
        </a>
        <ul id="taskbar">
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="https://github.com/cohengmc" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
