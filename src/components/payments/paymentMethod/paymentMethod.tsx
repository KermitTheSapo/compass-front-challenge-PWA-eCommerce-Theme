import * as S from "./paymentMethodStyle"
import plus from "@/assets/imgs/payments/plus.svg"
import googlePlay from "@/assets/imgs/payments/googlePlay.svg"
import phonePe from "@/assets/imgs/payments/phonePe.svg"
import paytm from "@/assets/imgs/payments/paytm.svg"
import minus from "@/assets/imgs/payments/minus.svg"
import { useState } from "react"
type Props = {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    stateCorrectInfo: boolean;
}
export default function PaymentMethod({ state, setState, stateCorrectInfo }: Props) {
    const [showUpi, setShowUpi] = useState(false)
    return (
        <S.PaymentMethodContainer>
            <S.PaymentOption>
                <S.PaymentHeader>
                    <S.PaymentMethodTitle>Debit Card/Credit Card</S.PaymentMethodTitle>
                    <S.ImgModal src={plus} alt="" />
                </S.PaymentHeader>
            </S.PaymentOption>
            <S.PaymentOption>
                <S.PaymentHeader>
                    <S.PaymentMethodTitle>UPI</S.PaymentMethodTitle>
                    <S.ImgModal onClick={() => setShowUpi(!showUpi)} src={showUpi ? minus : plus} alt="" />
                </S.PaymentHeader>
                {showUpi &&
                    <>
                        <S.MethodList>
                            <S.MethodItem>
                                <S.Label htmlFor="">
                                    <S.ImgPayment src={googlePlay} alt="" />
                                    <S.NamePayment>Google Pay</S.NamePayment>
                                </S.Label>
                                <S.InputRadio type="radio" name="upi" />
                            </S.MethodItem>
                            <S.MethodItem>
                                <S.Label htmlFor="">
                                    <S.ImgPayment src={phonePe} alt="" />
                                    <S.NamePayment>Phone Pe</S.NamePayment>
                                </S.Label>
                                <S.InputRadio type="radio" name="upi" />
                            </S.MethodItem>
                            <S.MethodItem>
                                <S.Label htmlFor="">
                                    <S.ImgPayment src={paytm} alt="" />
                                    <S.NamePayment>Paytm</S.NamePayment>
                                </S.Label>
                                <S.InputRadio type="radio" name="upi" />
                            </S.MethodItem>
                        </S.MethodList>
                        <S.UpiID>
                            <S.InputDiv>
                                <S.InputUpi type="text" placeholder="Enter your UPI Id" onChange={(e) => setState(e.target.value)} color={stateCorrectInfo ? "red" : "transparent"} />
                                {stateCorrectInfo && <S.ParagraphError>Please fill in the field correctly!</S.ParagraphError>}
                                <S.UpiExample>Eg: 1234567890@ybl</S.UpiExample>
                            </S.InputDiv>
                            <S.SaveBtn>
                                <S.InputCheckbox type="checkbox" name="" id="" />
                                <S.LabelCheckbox htmlFor="">Save this for future transactions</S.LabelCheckbox>
                            </S.SaveBtn>
                        </S.UpiID>
                    </>}
            </S.PaymentOption>
        </S.PaymentMethodContainer>
    )
}