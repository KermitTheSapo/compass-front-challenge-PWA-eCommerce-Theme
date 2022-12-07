import { Helmet } from "react-helmet"
import { useNavigate } from "react-router-dom"
import * as S from "./singUpStyle"

export default function SingUp() {
    const navigate = useNavigate()
    return (
        <S.SingUpContainer>
            <Helmet>
                <title>Coral'l | SingUp</title>
            </Helmet>
            <S.SingUpContent>
                <S.SingUpTitle>The shopping destination you need</S.SingUpTitle>
                <S.BtnGetStarted onClick={() => { navigate("/phone-number") }}>Get Started</S.BtnGetStarted>
                <S.Paragraph onClick={() => { navigate("/phone-number") }}>I already have an account</S.Paragraph>
            </S.SingUpContent>
        </S.SingUpContainer>
    )
}