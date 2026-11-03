
import './App.css'
import Navbar from './components/Navbar'
import Mackbookpro from './components/Mackbookpro'
import Iphonepro from './components/Iphonepro'
import Iphone from './components/Iphone'
import CardandWatch from './components/CardandWatch'
import AppletvandAirpods from './components/AppletvandAirpods'
import MackbookandIpad from './components/MackbookandIpad'
import MobileFooter from './components/MobileFooter'
import DesktopFooter from './components/DesktopFooter'
import MobileandDesktopFooter from './components/MobileandDesktopFooter'

function App() {

  return (
    <>
    <Navbar/>
    <Mackbookpro/>
    <Iphonepro/>
    <Iphone/>
    <CardandWatch/>
    <AppletvandAirpods/>
    <MackbookandIpad/>
    {/* <MobileFooter/> */}
    {/* <DesktopFooter/> */}
    <MobileandDesktopFooter/>
    </>
  )
}

export default App
