import "./Navbar.css";
import logo from "../assets/images/icons/logo.png";
import search from "../assets/images/icons/search-icon.png";
import cart from "../assets/images/icons/cart.png";

function Navbar(){
    return (
    <div className="navconti">
        <div className="linkContiner">
        <a href="#"><img src={logo} alt="app logo"/></a>
        <a href="/Mackbook" >Mac</a>
        <a href="/Ipad" >iPad</a>
        <a href="/Iphonepro" >iPhone</a>
        <a href="/Watch" >Watch</a>
        <a href="/Airpods" >AirPods</a>
        <a href="/Appletv" >TV & Home</a>
        <a href="/Card" > Only on Apple</a>
        <a href="#"><img src={search} alt="search"/></a>
        <a href="#"><img src={cart} alt="cart"/></a>
        </div>

    </div>
    )
}
export default Navbar;