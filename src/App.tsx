import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Reset } from "./assets/styles/reset"
import Handbags from "./components/category/handbags/handbags"
import Error from "./components/error/error"
import Home from "./components/Home/Home"

export default function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/handbags" element={<Handbags />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}