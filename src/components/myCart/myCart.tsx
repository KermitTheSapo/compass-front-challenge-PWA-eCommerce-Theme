import Footer from "../../components/footer/footer"
import Header from "../../components/Header/Header"
import ArrowRight from "@/assets/imgs/myCart/chevron-right-small.svg"
import * as S from "./myCartStyle"
import Product from "./product/product"
import arrowDown from "@/assets/imgs/myCart/arrowDown.svg"
import arrowUp from "@/assets/imgs/payments/arrow-up.svg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import { getBag } from "../../products/bag"

export default function MyCart() {
    const [showCoupon, setShowCoupon] = useState(false)
    const [productsList, setProductsList] = useState([{}])
    const navigate = useNavigate()
    useEffect(() => {
        getBag().then((res) => setProductsList(res))
    }, [])
    return (
        <>
            <Helmet>
                <title>Coral'l | My Cart</title>
            </Helmet>
            <Header />
            <S.MyCartContainer>
                <S.BreadCrumbs>
                    <S.LabelBreadCrumbOn>Home</S.LabelBreadCrumbOn>
                    <img src={ArrowRight} alt="" />
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
                                    <Product productTitle={item.name} productParagraph={item.description} productPrice={item.price} img={item.image} />
                                </div>
                            ))}
                        </S.ProductsDiv>
                    </S.ProductDetails>
                    <S.OrderSummary>
                        <S.OrderSummaryTitle>Order Summary</S.OrderSummaryTitle>
                        <S.Separator></S.Separator>
                        <S.OrderSummaryContent>
                            <S.Summary>
                                <S.ListSummary>
                                    <S.SummaryLabel>Sub Total</S.SummaryLabel>
                                    <S.SummaryPrice>$119.69</S.SummaryPrice>
                                </S.ListSummary>
                                <S.ListSummary>
                                    <S.SummaryLabel>Discount</S.SummaryLabel>
                                    <S.SummaryPrice>-$13.40</S.SummaryPrice>
                                </S.ListSummary>
                                <S.ListSummary>
                                    <S.SummaryLabel>Delivery Fee</S.SummaryLabel>
                                    <S.SummaryPrice>-$0.00</S.SummaryPrice>
                                </S.ListSummary>
                                <S.ListSummary>
                                    <S.SummaryTotal>Grand Total</S.SummaryTotal>
                                    <S.SummaryPriceTotal>$106.29</S.SummaryPriceTotal>
                                </S.ListSummary>
                            </S.Summary>
                            <S.ButtonsActions>
                                <S.BtnOrder onClick={() => navigate("/checkout")}>Place Order</S.BtnOrder>
                                <S.BtnContinue onClick={() => navigate("/")}>Continue Shopping</S.BtnContinue>
                            </S.ButtonsActions>
                        </S.OrderSummaryContent>
                    </S.OrderSummary>
                </S.MyCartContent>
                <S.ApplyCoupon>
                    <S.ApplyHeader>
                        <S.ApplyCouponTitle>Apply Coupon</S.ApplyCouponTitle>
                        <S.ArrowModal src={showCoupon ? arrowUp : arrowDown} alt="" onClick={() => setShowCoupon(!showCoupon)} />
                    </S.ApplyHeader>
                    <S.Separator></S.Separator>
                    {showCoupon && <S.CouponDiv>
                        <S.InputCode type="text" placeholder="Apply Coupon Code" />
                        <S.ButtonCheck>Check</S.ButtonCheck>
                    </S.CouponDiv>}
                </S.ApplyCoupon>
            </S.MyCartContainer>
            <Footer />
        </>
    )
}