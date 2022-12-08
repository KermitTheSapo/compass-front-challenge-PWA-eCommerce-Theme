import { useState } from "react"
import { useNavigate } from "react-router-dom";
import * as S from "./phoneNumberStyle"

export default function PhoneNumber() {
    const [maskPhoneValue, setMaskPhoneValue] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [ddd, setDdd] = useState<string>("")
    const navigate = useNavigate()
    const maskPhone = (value: string) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .replace(/(-\d{4})(\d+?)$/, "$1");
    };

    const next = () => {
        if (phone === "86757684968" && ddd === "09") {
            navigate("/enter-otp")
        } else {
            alert("Phone number is invalid")
        }
    }

    return (
        <S.PhoneNumberContainer>
            <S.Title>Enter your phone number</S.Title>
            <S.InputsDiv>
                <S.InputDdd type="text" placeholder="+09" value={ddd} onChange={(e) => setDdd(e.target.value)} maxLength={2} />
                <S.InputNumber type="text" placeholder="86757684968" value={maskPhoneValue} onChange={(e) => { setMaskPhoneValue(maskPhone(e.target.value)); setPhone(e.target.value) }} />
            </S.InputsDiv>
            <S.Paragraph>A 4 digit code will be sent to this number.</S.Paragraph>
            <S.ButtonNext onClick={() => next()}>Next</S.ButtonNext>
        </S.PhoneNumberContainer>
    )
}