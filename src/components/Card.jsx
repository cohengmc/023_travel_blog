// Color
// Image
// Date
// Title

// Make it look like a polaroid

import './Card.css'

function Card(props) {

  return (
    <div className='card-tile'>
      <h2>12 May 2024</h2>
      <img className="card-img" src={ props.img } alt="" />
      <h3>I am the title</h3>
    </div>
  );
}

export default Card;
