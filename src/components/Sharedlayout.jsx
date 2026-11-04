import "./Sharedlayout.css";
import Navbar from "./Navbar";
import MobileandDesktopFooter from "./MobileandDesktopFooter";
import { Outlet } from "react-router-dom";


function Sharedlayout() {
  return (
    <>
    <Navbar/>
    <main className="outlet-content">
      <Outlet/>
    </main>
    <MobileandDesktopFooter/>
    </>
  )
}
export default Sharedlayout;