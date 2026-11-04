import './App.css'
import Mackbookpro from './components/Mackbookpro'
import Iphonepro from './components/Iphonepro'
import { Route, Routes } from "react-router-dom"
import Main from './components/Main'
import Ipad from './components/Ipad'
import Watch from './components/Watch'
import Airpods from './components/Airpods'
import Appletv from './components/Appletv'
import Card from './components/Card'
import Sharedlayout from './components/Sharedlayout'

function App() {

  return (
    <>
    <Routes>

       <Route path='/' element={<Sharedlayout/>}>

        <Route path='/' element={<Main/>}/>
        <Route path="/Mackbook" element={<Mackbookpro/> }/>
        <Route path="/Ipad" element={<Ipad/>}/>
        <Route path="/Iphonepro" element={<Iphonepro/>}/>
        <Route path="/Watch" element={<Watch/>}/>
        <Route path="/Airpods" element={ <Airpods/>}/>
        <Route path="/Appletv" element={ <Appletv/>}/>
        <Route path="/Card" element={ <Card/>}/>

      </Route>

    </Routes>
    </>
  )
}

export default App
