import "./Mackbook.css";
import mackpro2 from "../assets/images/home/macbook-pro.jpg";
function Mackbook() {
  return (
    <div className="mack-container">
      <div className="mack-note-container">
        <h2>New</h2>
        <h1>MackBook Por</h1>
        <h3>The best for the brightest.</h3>
      </div>
      <div className="mack-link-container">
        <a href="#">Learn more &gt; </a> <a href="#">Buy &gt;</a>
      </div>
      <div className="mack-img-container">
        <img src={mackpro2} alt="" />
      </div>
    </div>
  );
}
export default Mackbook;
