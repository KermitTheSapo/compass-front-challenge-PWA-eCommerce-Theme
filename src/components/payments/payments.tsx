import Address from "../../components/order/address/address"
import BottomSheetAddress from "../../components/order/bottomSheetAddress/bottomSheetAddress"
import { useState } from "react"
import * as S from "./paymentsStyle"
import arrow from "@/assets/imgs/newAddress/arrow.svg"
import arrowDown from "@/assets/imgs/payments/arrow-down.svg"
import arrowUp from "@/assets/imgs/payments/arrow-up.svg"
import PaymentMethod from "./paymentMethod/paymentMethod"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"

export default function Payments() {
    const [sheetEditAddress, setSheetEditAddress] = useState(false)
    const [showPaymentMethod, setShowPaymentMethod] = useState(false)
    const [upiText, setUpiText] = useState("")
    const [correctInfo, setCorrectInfo] = useState(false)
    const navigate = useNavigate()

    const checkInformation = () => {
        if (upiText.length > 7) {
            navigate("/confirmed")
            setCorrectInfo(false)
        } else {
            setCorrectInfo(true)
        }
    }
    return (
        <S.PaymentsContainer>
            <Helmet>
                <title>Coral'l | Payments</title>
            </Helmet>
            <S.PaymentsHeader>
                <S.ImgArrowBack src={arrow} alt="" onClick={() => navigate(-1)} />
                <S.PaymentsTitle>Payments</S.PaymentsTitle>
            </S.PaymentsHeader>
            <Address state={sheetEditAddress} setState={setSheetEditAddress} />
            <S.Separator></S.Separator>
            <S.ProductDetails>
                <S.ProductDetailsTitle>Product Details</S.ProductDetailsTitle>
                <S.ImgArrow src={arrowDown} alt="" />
            </S.ProductDetails>
            <S.Separator></S.Separator>
            <S.PaymentMethod>
                <S.PaymentHeader>
                    <S.PaymentMethodTitle>Payment Method</S.PaymentMethodTitle>
                    <S.ImgArrow onClick={() => setShowPaymentMethod(!showPaymentMethod)} src={showPaymentMethod ? arrowUp : arrowDown} alt="" />
                </S.PaymentHeader>
                {showPaymentMethod && <PaymentMethod state={upiText} setState={setUpiText} stateCorrectInfo={correctInfo} />}
            </S.PaymentMethod>
            <S.BtnPayNowDiv>
                <S.BtnPay onClick={() => { checkInformation() }}>Pay Now</S.BtnPay>
            </S.BtnPayNowDiv>
            {sheetEditAddress && <BottomSheetAddress state={sheetEditAddress} setState={setSheetEditAddress} />}
        </S.PaymentsContainer>
    )
}