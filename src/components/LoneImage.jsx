import "./LoneImage.css";

function LoneImage(props) {
  return (
    <div className="loneImage">
        <img src={props.image} alt={props.alt} />
    </div>
  );
}

export default LoneImage;
