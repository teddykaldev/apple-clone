import "./MobileandDesktopFooter.css";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./DesktopFooter";

 function MobileandDesktopFooter() {
  return (
    <>
        <div className="MobileFooter-cont">
            <MobileFooter/>  
        </div>
        <div className="DesktopFooter-cont">
            <DesktopFooter/>
        </div>
    </>

  )
}
export default MobileandDesktopFooter;