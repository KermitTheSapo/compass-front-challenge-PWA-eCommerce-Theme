import Footer from "../../components/footer/footer"
import Header from "../../components/Header/Header"
import arrowBreadcrumbs from "@/assets/imgs/myCart/chevron-right-small.svg"
import arrowUp from "@/assets/imgs/checkoutInfo/chevron-up.svg"
import arrowDown from "@/assets/imgs/checkoutInfo/chevron-bottom.svg"
import creditCard from "@/assets/imgs/checkoutPayment/creditCard.svg"
import amazon from "@/assets/imgs/checkoutPayment/amazon.svg"
import apple from "@/assets/imgs/checkoutPayment/apple.svg"
import upi from "@/assets/imgs/checkoutPayment/upi.svg"
import googlePlay from "@/assets/imgs/checkoutPayment/googlePlay.svg"
import phonePe from "@/assets/imgs/checkoutPayment/phonePe.svg"
import paytm from "@/assets/imgs/checkoutPayment/paytm.svg"

import * as S from "./checkoutPaymentStyle"
import OrderSummaryAndDetails from "../../components/checkoutInfo/orderSummaryAndDetails/orderSummaryAndDetails"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"

export default function CheckoutPayment() {
    const [showPayments, setShowPayments] = useState(true)
    const [activePaymentMethod, setActivePaymentMethod] = useState(false)
    const navigate = useNavigate()

    return (
        <>
            <Helmet>
                <title>Coral'l | Checkout - Payment</title>
            </Helmet>
            <Header />
            <S.CheckoutPaymentContainer>
                <S.Breadcrumbs>
                    <S.Label color="#1B4B66">Home</S.Label>
                    <img src={arrowBreadcrumbs} alt="" />
                    <S.Label color="#626262">Checkout</S.Label>
                </S.Breadcrumbs>
                <S.TitlePageDiv>
                    <S.TitlePage>Checkout</S.TitlePage>
                </S.TitlePageDiv>
                <S.CheckoutContent>
                    <S.ContactAndPayments>
                        <S.ContactContainer>
                            <S.ContactTitle>Contact Information</S.ContactTitle>
                            <S.ImgArrowModal src={arrowUp} alt="" />
                        </S.ContactContainer>
                        <S.Separator></S.Separator>
                        <S.PaymentsDiv>
                            <S.PaymentsHeader>
                                <S.PaymentsTitle>Payments</S.PaymentsTitle>
                                <S.ImgArrowModal src={showPayments ? arrowDown : arrowUp} alt="" onClick={() => setShowPayments(!showPayments)} />
                            </S.PaymentsHeader>
                            <S.Separator></S.Separator>
                            {showPayments && <S.PaymentMethods>
                                <S.CardMethod onClick={() => setActivePaymentMethod(!activePaymentMethod)}>
                                    <S.InputRadioMethod type="radio" />
                                    <S.ImgCardMethod src={upi} alt="" />
                                    <S.CardMethodName>UPI</S.CardMethodName>
                                </S.CardMethod>
                                <S.CardMethod>
                                    <S.InputRadioMethod type="radio" />
                                    <S.ImgCardMethod src={creditCard} alt="" />
                                    <S.CardMethodName>Credit/Debit Card</S.CardMethodName>
                                </S.CardMethod>
                                <S.CardMethod>
                                    <S.InputRadioMethod type="radio" />
                                    <S.ImgCardMethod src={apple} alt="" />
                                    <S.CardMethodName>Apple Pay</S.CardMethodName>
                                </S.CardMethod>
                                <S.CardMethod>
                                    <S.InputRadioMethod type="radio" />
                                    <S.ImgCardMethod src={amazon} alt="" />
                                    <S.CardMethodName>Amazon Pay</S.CardMethodName>
                                </S.CardMethod>
                            </S.PaymentMethods>}
                            {activePaymentMethod && <S.ActivePaymentMethod>
                                <S.MethodItem>
                                    <S.ImgTitleItem>
                                        <S.ImgMethod src={googlePlay} alt="" />
                                        <S.MethodItemTitle>Google Pay</S.MethodItemTitle>
                                    </S.ImgTitleItem>
                                    <S.InputRadioMethod type="radio" />
                                </S.MethodItem>
                                <S.MethodItem>
                                    <S.ImgTitleItem>
                                        <S.ImgMethod src={phonePe} alt="" />
                                        <S.MethodItemTitle>Google Pay</S.MethodItemTitle>
                                    </S.ImgTitleItem>
                                    <S.InputRadioMethod type="radio" />
                                </S.MethodItem>
                                <S.MethodItem>
                                    <S.ImgTitleItem>
                                        <S.ImgMethod src={paytm} alt="" />
                                        <S.MethodItemTitle>Google Pay</S.MethodItemTitle>
                                    </S.ImgTitleItem>
                                    <S.InputRadioMethod type="radio" />
                                </S.MethodItem>
                            </S.ActivePaymentMethod>}
                        </S.PaymentsDiv>
                    </S.ContactAndPayments>
                    <OrderSummaryAndDetails />
                </S.CheckoutContent>
                <S.ButtonsActions>
                    <S.ButtonBack>Back to Cart</S.ButtonBack>
                    <S.ButtonNext onClick={() => navigate("/checkout-payment")}>Next</S.ButtonNext>
                </S.ButtonsActions>
            </S.CheckoutPaymentContainer>
            <Footer />
        </>
    )
}