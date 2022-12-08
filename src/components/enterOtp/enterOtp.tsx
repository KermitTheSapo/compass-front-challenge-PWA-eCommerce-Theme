import { useState } from "react"
import { useNavigate } from "react-router-dom"

import * as S from "./enterOtpStyle"

export default function EnterOtp() {
    const navigate = useNavigate()
    const [numberOne, setNumberOne] = useState("")
    const [numberTwo, setNumberTwo] = useState("")
    const [numberThree, setNumberThree] = useState("")
    const [numberFour, setNumberFour] = useState("")

    const next = () => {
        let number = numberOne + numberTwo + numberThree + numberFour
        if (number === "1234") {
            navigate("/my-orders")
        } else {
            alert("Incorrect code, please enter the correct code!")
        }
    }

    return (
        <S.EnterOtpContainer>
            <S.Title>Enter OTP</S.Title>
            <S.ParagraphInfo>A 4 digit code was sent to your number.</S.ParagraphInfo>
            <S.InputsDiv>
                <S.InputNumber type="text" placeholder="1" value={numberOne} onChange={(e) => setNumberOne(e.target.value)} maxLength={1} />
                <S.InputNumber type="text" placeholder="2" value={numberTwo} onChange={(e) => setNumberTwo(e.target.value)} maxLength={1} />
                <S.InputNumber type="text" placeholder="3" value={numberThree} onChange={(e) => setNumberThree(e.target.value)} maxLength={1} />
                <S.InputNumber type="text" placeholder="4" value={numberFour} onChange={(e) => setNumberFour(e.target.value)} maxLength={1} />
            </S.InputsDiv>
            <S.RequestDiv>
                <S.CodeParagraph>Didn’t receive the code?</S.CodeParagraph>
                <S.RequestParagraph onClick={() => navigate("/error")}>Request again</S.RequestParagraph>
            </S.RequestDiv>
            <S.CreateButton onClick={() => next()}>Verify & Create Account</S.CreateButton>
        </S.EnterOtpContainer>
    )
}