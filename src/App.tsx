import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Reset } from "./assets/styles/reset"
import Eyewear from "./components/category/eyewear/eyewear"
import Handbags from "./components/category/handbags/handbags"
import Jewellery from "./components/category/jewellery/jewellery"
import Skincare from "./components/category/skincare/skincareStyle"
import Watches from "./components/category/watches/watches"
import Error from "./components/error/error"
import GrandeItem from "./components/grandeItem/grandeItem"
import Home from "./components/Home/Home"

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
        <Route path="/grandeItem" element={<GrandeItem />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}