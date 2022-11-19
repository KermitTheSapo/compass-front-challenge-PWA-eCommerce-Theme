import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Reset } from "./assets/styles/reset"
import Boker from "./components/boker/boker"
import Boujee from "./components/boujee/boujee"
import Apparels from "./components/category/apparels/apparels"
import Eyewear from "./components/category/eyewear/eyewear"
import Handbags from "./components/category/handbags/handbags"
import Jewellery from "./components/category/jewellery/jewellery"
import Skincare from "./components/category/skincare/skincare"
import Watches from "./components/category/watches/watches"
import Coach from "./components/coach/coach"
import Error from "./components/error/error"
import GrandeItem from "./components/grandeItem/grandeItem"
import Home from "./components/Home/Home"
import Remus from "./components/remus/remus"

export default function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eyewear" element={<Eyewear />} />
        <Route path="/handbags" element={<Handbags />} />
        <Route path="/jewellery" element={<Jewellery />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/grande" element={<GrandeItem />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/remus" element={<Remus />} />
        <Route path="/boujee" element={<Boujee />} />
        <Route path="/boker" element={<Boker />} />
        <Route path="/apparels" element={<Apparels />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}