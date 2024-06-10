import "./Card.css";

function Card(props) {
  let heightStyle = "100%";
  let widthStyle = "100%";

  if (props.vertical) {
    heightStyle = "auto";
  } else {
    widthStyle = "auto";
  }

  return (
    <div className={`card-tile ${props.clickable ? "card-tile-hover" : ""}`}>
      <div className="card-img-container">
        <img
          className="card-img"
          src={props.img}
          alt={props.alt}
          style={{
            paddingBottom: props.paddingBottom,
            paddingTop: props.paddingTop,
            paddingLeft: props.paddingLeft,
            paddingRight: props.paddingRight,
            height: heightStyle,
            width: widthStyle,
          }}
        />
      </div>
      <div className="image-info">
        <h2 className="title">{props.title}</h2>
        <div className="day-specifics">
          <h4 className="date">{props.date}</h4>
          <h4 className="location">
            {props.location ? "📍" : ""}
            {props.location}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
