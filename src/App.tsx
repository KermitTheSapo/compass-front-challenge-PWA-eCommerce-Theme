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
import Checkout from "./components/checkout/checkout"
import Address from "./components/address/address"
import Search from "./components/search/search"
import Filters from "./components/category/filters/filters"
import Product from "./components/product/product"
import Profile from "./components/profile/profile"
import SingUp from "./components/singup/singUp"
import { Notification } from "./components/notification/notification"
import Wishlist from "./components/wishlist/wishlist"
import Categories from "./components/categories/categories"
import MyReviews from "./components/myReviews/myReviews"
import Refer from "./components/refer/refer"
import About from "./components/about/about"
import PhoneNumber from "./components/phoneNumber/phoneNumber"
import EnterOtp from "./components/enterOtp/enterOtp"
import Invoice from "./components/invoice/invoice"
import PersonalInfo from "./components/profile/userProfile/personalInfo/personalInfo"
import OrderTab from "./components/profile/userProfile/orderTab/orderTab"
import OrderList from "./components/profile/userProfile/orderTab/orderList/orderList"
import OrderDetail from "./components/profile/userProfile/orderDetail/orderDetail"
import WishlistPage from "./components/profile/userProfile/wishlist/wishlist"
import SavedCards from "./components/profile/userProfile/savedCards/savedCards"

export default function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" element={<SingUp />} />
        <Route path="/home" element={<Home />} />
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
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/address" element={<Address />} />
        <Route path="/search" element={<Search />} />
        <Route path="/filters" element={<Filters />} />
        <Route path="/product" element={<Product />} />
        <Route path="/personal" element={<PersonalInfo />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/orderProduct" element={<OrderDetail />} />
        <Route path="/savedCards" element={<SavedCards />} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<PersonalInfo />} />
          <Route path="refer" element={<Refer />} />
          <Route path="orders" element={<OrderTab />}>
            <Route index element={<OrderList />} />
            <Route path="product" element={<OrderDetail />} />
          </Route>
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="review" element={<MyReviews />} />
          <Route path="address" element={<Address />} />
          <Route path="saved" element={<SavedCards />} />
          <Route path="*" element={<SavedCards />} />
        </Route>
        <Route path="/notification" element={<Notification />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/myReviews" element={<MyReviews />} />
        <Route path="/refer" element={<Refer />} />
        <Route path="/about" element={<About />} />
        <Route path="/phone-number" element={<PhoneNumber />} />
        <Route path="/enter-otp" element={<EnterOtp />} />
        <Route path="/invoices" element={<Invoice />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}