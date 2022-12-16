import Footer from "../../components/footer/footer"
import Header from "../../components/Header/Header"
import ArrowRight from "@/assets/imgs/myCart/chevron-right-small.svg"
import * as S from "./myCartStyle"
import Product from "./product/product"
import arrowDown from "@/assets/imgs/myCart/arrowDown.svg"
import arrowUp from "@/assets/imgs/payments/arrow-up.svg"
import { Key, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import { getBag } from "../../products/bag"
import { getCoupon } from "../../products/coupon"

export default function MyCart() {
    const [showCoupon, setShowCoupon] = useState(false)
    const [coupon, setCoupon] = useState("")
    const [discountValue, setDiscountValue] = useState(0)
    const [couponList, setCouponList] = useState([{
        _id: "",
        name: "",
        value: 0,
        code: "",
    }])
    const [productsList, setProductsList] = useState([{
        _id: "",
        name: "",
        price: 0,
        category: "",
        image: "",
        description: "",
        imgAlt: "",
        paragraph: "",
        link: "",
        ratings: 0,
        discount: 0,
        safe: 0,
        quantity: 0
    }])
    const [allPrice, setAllPrice] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        getBag().then((res) => setProductsList(res))
        let Total = 0
        productsList.map((product) => {
            Total = Total + (product.price * product.quantity)
        })
        setAllPrice(Total)
        let subTotal = 0
        productsList.map((product) => {
            subTotal = subTotal + product.price
        })
        setSubTotal(subTotal)
    }, [productsList])
    useEffect(() => {
        getCoupon().then((res) => setCouponList(res))
    }, [])
    const checkCoupon = () => {
        let couponCode = couponList.filter((item) => item.code === coupon)
        if (couponCode.length === 0) {
            alert("Coupon code is not valid")
        } else {
            let discount = couponCode[0].value
            let discountPrice = (subTotal * discount) / 100
            setDiscountValue((subTotal * discount) / 100)
            let newPrice = subTotal - discountPrice
            setAllPrice(newPrice)
        }
    }
    return (
        <>
            <Helmet>
                <title>Coral'l | My Cart</title>
            </Helmet>
            <Header />
            <S.MyCartContainer>
                <S.BreadCrumbs>
                    <S.LabelBreadCrumbOn>Home</S.LabelBreadCrumbOn>
                    <img src={ArrowRight} alt="left arrow icon" />
                    <S.LabelBreadCrumbOff>My Cart</S.LabelBreadCrumbOff>
                </S.BreadCrumbs>
                <S.PageTitleDiv>
                    <S.PageTitle>My Cart</S.PageTitle>
                </S.PageTitleDiv>
                <S.MyCartContent>
                    <S.ProductDetails>
                        <S.TableHeading>
                            <S.ContentDiv>
                                <S.TableHeadingText>Product Name</S.TableHeadingText>
                                <S.ContentValueDiv>
                                    <S.TableHeadingText>Price</S.TableHeadingText>
                                    <S.TableHeadingText>Qty</S.TableHeadingText>
                                    <S.TableHeadingText>Subtotal</S.TableHeadingText>
                                </S.ContentValueDiv>
                            </S.ContentDiv>
                            <S.Separator></S.Separator>
                        </S.TableHeading>
                        <S.ProductsDiv>

                            {productsList && productsList.map((item: any, key: Key | null | undefined) => (
                                <div key={key}>
                                    <Product productTitle={item.name} productParagraph={item.description} productPrice={item.price} img={item.image} quantity={item.quantity} id={item._id} setState={setProductsList} safe={item.safe} discount={item.discount} ratings={item.ratings} />
                                </div>
                            ))}
                            {productsList.length === 0 && <S.EmptyCart>
                                <S.EmptyTitle>Uh Oh....!</S.EmptyTitle>
                                <S.EmptyParagraph>You haven’t added any items. Start shopping to make your bag bloom</S.EmptyParagraph>
                            </S.EmptyCart>}
                        </S.ProductsDiv>
                    </S.ProductDetails>
                    <S.OrderSummary>
                        <S.OrderSummaryTitle>Order Summary</S.OrderSummaryTitle>
                        <S.Separator></S.Separator>
                        <S.OrderSummaryContent>
                            <S.Summary>
                                <S.ListSummary>
                                    <S.SummaryLabel>Sub Total</S.SummaryLabel>
                                    <S.SummaryPrice>${subTotal.toFixed(2)}</S.SummaryPrice>
                                </S.ListSummary>
                                <S.ListSummary>
                                    <S.SummaryLabel>Discount</S.SummaryLabel>
                                    <S.SummaryPrice>-${discountValue}</S.SummaryPrice>
                                </S.ListSummary>
                                <S.ListSummary>
                                    <S.SummaryLabel>Delivery Fee</S.SummaryLabel>
                                    <S.SummaryPrice>-$0.00</S.SummaryPrice>
                                </S.ListSummary>
                                <S.ListSummary>
                                    <S.SummaryTotal>Grand Total</S.SummaryTotal>
                                    <S.SummaryPriceTotal>${allPrice.toFixed(2)}</S.SummaryPriceTotal>
                                </S.ListSummary>
                            </S.Summary>
                            <S.ButtonsActions>
                                <S.BtnOrder onClick={() => navigate("/checkout")}>Place Order</S.BtnOrder>
                                <S.BtnContinue onClick={() => navigate("/home")}>Continue Shopping</S.BtnContinue>
                            </S.ButtonsActions>
                        </S.OrderSummaryContent>
                    </S.OrderSummary>
                </S.MyCartContent>
                <S.ApplyCoupon>
                    <S.ApplyHeader>
                        <S.ApplyCouponTitle>Apply Coupon</S.ApplyCouponTitle>
                        <S.ArrowModal src={showCoupon ? arrowUp : arrowDown} alt="down or up arrow icon" onClick={() => setShowCoupon(!showCoupon)} />
                    </S.ApplyHeader>
                    <S.Separator></S.Separator>
                    {showCoupon && <S.CouponDiv>
                        <S.InputCode type="text" placeholder="Apply Coupon Code" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
                        <S.ButtonCheck onClick={() => checkCoupon()}>Check</S.ButtonCheck>
                    </S.CouponDiv>}
                </S.ApplyCoupon>
            </S.MyCartContainer>
            <Footer />
        </>
    )
}