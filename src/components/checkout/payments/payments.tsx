import * as S from "./paymentsStyle"
import arrowUp from "@/assets/imgs/checkout/chevron-up.svg"
import arrowDown from "@/assets/imgs/checkout/chevron-bottom.svg"
import creditCard from "@/assets/imgs/checkout/creditCard.svg"
import amazon from "@/assets/imgs/checkout/amazon.svg"
import apple from "@/assets/imgs/checkout/apple.svg"
import upi from "@/assets/imgs/checkout/upi.svg"
import googlePlay from "@/assets/imgs/checkout/googlePlay.svg"
import phonePe from "@/assets/imgs/checkout/phonePe.svg"
import paytm from "@/assets/imgs/checkout/paytm.svg"
import { useState } from "react"

export default function CheckoutPayments() {
    const [showPayments, setShowPayments] = useState(true)
    const [activePaymentMethod, setActivePaymentMethod] = useState(false)
    return (
        <S.CheckoutContent>
            <S.ContactAndPayments>
                <S.PaymentsDiv>
                    <S.PaymentsHeader>
                        <S.PaymentsTitle>Payments</S.PaymentsTitle>
                        <S.ImgArrowModal src={showPayments ? arrowDown : arrowUp} alt="up or down arrow icon" onClick={() => setShowPayments(!showPayments)} />
                    </S.PaymentsHeader>
                    <S.Separator></S.Separator>
                    {showPayments && <S.PaymentMethods>
                        <S.CardMethod onClick={() => setActivePaymentMethod(!activePaymentMethod)}>
                            <S.InputRadioMethod type="radio" />
                            <S.ImgCardMethod src={upi} alt="UPI logo icon" />
                            <S.CardMethodName>UPI</S.CardMethodName>
                        </S.CardMethod>
                        <S.CardMethod>
                            <S.InputRadioMethod type="radio" />
                            <S.ImgCardMethod src={creditCard} alt="credit card icon" />
                            <S.CardMethodName>Credit/Debit Card</S.CardMethodName>
                        </S.CardMethod>
                        <S.CardMethod>
                            <S.InputRadioMethod type="radio" />
                            <S.ImgCardMethod src={apple} alt="apple pay icon" />
                            <S.CardMethodName>Apple Pay</S.CardMethodName>
                        </S.CardMethod>
                        <S.CardMethod>
                            <S.InputRadioMethod type="radio" />
                            <S.ImgCardMethod src={amazon} alt="amazon pay icon" />
                            <S.CardMethodName>Amazon Pay</S.CardMethodName>
                        </S.CardMethod>
                    </S.PaymentMethods>}
                    {activePaymentMethod && <S.ActivePaymentMethod>
                        <S.MethodItem>
                            <S.ImgTitleItem>
                                <S.ImgMethod src={googlePlay} alt="google pay icon" />
                                <S.MethodItemTitle>Google Pay</S.MethodItemTitle>
                            </S.ImgTitleItem>
                            <S.InputRadioMethod type="radio" />
                        </S.MethodItem>
                        <S.MethodItem>
                            <S.ImgTitleItem>
                                <S.ImgMethod src={phonePe} alt="google pay icon" />
                                <S.MethodItemTitle>Google Pay</S.MethodItemTitle>
                            </S.ImgTitleItem>
                            <S.InputRadioMethod type="radio" />
                        </S.MethodItem>
                        <S.MethodItem>
                            <S.ImgTitleItem>
                                <S.ImgMethod src={paytm} alt="google pay icon" />
                                <S.MethodItemTitle>Google Pay</S.MethodItemTitle>
                            </S.ImgTitleItem>
                            <S.InputRadioMethod type="radio" />
                        </S.MethodItem>
                    </S.ActivePaymentMethod>}
                </S.PaymentsDiv>
            </S.ContactAndPayments>
        </S.CheckoutContent>
    )
}