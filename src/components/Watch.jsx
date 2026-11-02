import "./Watch.css";
import imageWatch from "../assets/images/icons/watch-series5-logo.png";
function Watch() {
  return (
    <div className="Watch-container">
      <div className="w-img-container">
        <img src={imageWatch} alt="" />
      </div>
      <div className="w-note-container">
        <p className="w-pragraph">With the new always-on Retina display.</p>
        <p className="w-pragraph2">you'have never seen a watch like this.</p>
      </div>
      <div className="w-link-container">
        <a href="#">Learn more &gt; </a> <a href="#">Buy &gt;</a>
      </div>
    </div>
  );
}
export default Watch;
