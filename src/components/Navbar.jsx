import "./Navbar.css";
import logo from "../assets/images/icons/logo.png";
import search from "../assets/images/icons/search-icon.png";
import cart from "../assets/images/icons/cart.png";
import { Link } from "react-router-dom";

function Navbar(){
    return (
    <div className="navconti">
        <div className="linkContiner">
        <Link to="/"><img src={logo} alt="app logo"/></Link>
        <Link to="/Mackbook" >Mac</Link>
        <Link to="/Ipad" >iPad</Link>
        <Link to="/Iphonepro" >iPhone</Link>
        <Link to="/Watch" >Watch</Link>
        <Link to="/Airpods" >AirPods</Link>
        <Link to="/Appletv" >TV & Home</Link>
        <Link to="/Card" > Only on Apple</Link>
        <Link to="#"><img src={search} alt="search"/></Link>
        <Link to="#"><img src={cart} alt="cart"/></Link>
        </div>
    </div>
    )
}
export default Navbar;