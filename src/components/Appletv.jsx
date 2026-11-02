import "./Appletv.css";
import appletv from "../assets/images/icons/apple-tv-logo.png";
import servantimg from "../assets/images/icons/servant-logo.png";

function Appletv() {
  return (
    <div className="appletv-container">
      <div className="atv-img-container">
        <img src={appletv} alt="" />
      </div>
      <div className="servant-img">
        <img src={servantimg} alt="" />
      </div>
      <div className="atv-note-container">
        <p>Watch the trailer.Get 1 year free when</p>
        <p>you buy an Apple device.</p>
      </div>
      <div className="a-link-container">
        <a href="#">i think you love it.</a>
      </div>
    </div>
  );
}

export default Appletv;
