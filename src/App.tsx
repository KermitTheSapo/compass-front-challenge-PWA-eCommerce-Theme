import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Reset } from "./assets/styles/reset"
import Header from "./components/Header/Header"

export default function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" element={<Header />} />
        {/* <Route path="/*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  )
}