import Reviews from "./components/productPage/reviews/reviews"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Reset } from "./assets/styles/reset"
import Apparels from "./components/category/apparels/apparels"
import Eyewear from "./components/category/eyewear/eyewear"
import Handbags from "./components/category/handbags/handbags"
import Jewellery from "./components/category/jewellery/jewellery"
import Skincare from "./components/category/skincare/skincare"
import Watches from "./components/category/watches/watches"
import Error from "./components/error/error"
import Home from "./components/Home/Home"
import AddReview from "./components/productPage/addReview/addReview"
import Bag from "./components/bag/bag"
import Order from "./components/order/order"
import NewAddress from "./components/newAddress/newAddress"
import Payments from "./components/payments/payments"
import Confirmed from "./components/confirmed/confirmed"
import MyCart from "./components/myCart/myCart"
import CheckoutInfo from "./components/checkoutInfo/checkoutInfo"
import CheckoutPayment from "./components/checkoutPayment/checkoutPayment"
import Wishlist from "./components/wishlist/wishlist"
import Search from "./components/search/search"
import SearchError from "./components/searchError/searchError"
import Filters from "./components/category/filters/filters"
import Product from "./components/product/product"

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
        <Route path="/apparels" element={<Apparels />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/addReview" element={<AddReview />} />
        <Route path="/order" element={<Order />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/new-address" element={<NewAddress />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/confirmed" element={<Confirmed />} />
        <Route path="/myCart" element={<MyCart />} />
        <Route path="/checkout-info" element={<CheckoutInfo />} />
        <Route path="/checkout-payment" element={<CheckoutPayment />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchError" element={<SearchError />} />
        <Route path="/filters" element={<Filters />} />
        <Route path="/product" element={<Product />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}