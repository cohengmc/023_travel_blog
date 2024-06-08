// Color
// Image
// Date
// Title

// Make it look like a polaroid

import "./Card.css";

function Card(props) {

  let heightStyle = "100%";
  let widthStyle = "100%"

  if (props.landscape){
    heightStyle = "auto";
  } else {
    widthStyle = "auto"
  }

  return (
    <div className="card-tile">
      <div className="card-img-container">
        <img
          className="card-img"
          src={props.img}
          alt={props.alt}
          style={{ paddingBottom: props.paddingBottom,paddingTop: props.paddingTop,paddingLeft: props.paddingLeft, paddingRight: props.paddingRight, height: heightStyle, width: widthStyle}}
        />
      </div>
      <h2 className="title">{props.title}</h2>
      <div className="day-specifics">
        <h4 className="date">{props.date}</h4>
        <h4 className="location">📍{props.location}</h4>
      </div>
    </div>
  );
}

export default Card;
