import "./Mackbookpro.css";
import mackpro1 from "../assets/images/home/macbook-pro.jpg";
function Mackbookpro() {
  return (
    <div className="mack-pro-contiener">
      <div className="mackpro-note-contiener">
        <h2>New</h2>
        <h1>MackBookpro Por</h1>
        <h3>The best for the brightest.</h3>
      </div>
      <div className="mackpro-link-contiener">
        <a href="#">Learn more &gt; </a> <a href="#">Buy &gt;</a>
      </div>
      <div className="mackpro-img-continer">
        <img src={mackpro1} alt="MackBook image" />
      </div>
    </div>
  );
}
export default Mackbookpro;
