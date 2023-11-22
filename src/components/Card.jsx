import PropTypes from "prop-types";
import "../assets/styles/Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h2>{props.price}</h2>
      <button>
        {props.category[0]}&nbsp;
        {props.category[1]}
      </button>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default Card;
