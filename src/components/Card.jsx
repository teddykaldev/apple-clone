import "./Card.css";
import cardImage from "../assets/images/icons/apple-card-logo.png";
function Card() {
  return (
    <div className="card-container">
      <div className="c-img-container">
        <img src={cardImage} alt="" />
      </div>
      <div className="c-note-container">
        <p className="c-pragraph">Get 3% Daily Cash on all purchases.</p>
        <p className="c-pragraph2">Made by Apple,not a bank.</p>
      </div>
      <div className="c-link-container">
        <a href="#">Learn more &gt; </a> <a href="#">Buy &gt;</a>
      </div>
    </div>
  );
}
export default Card;
