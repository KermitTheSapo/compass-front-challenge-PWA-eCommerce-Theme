import { useState } from "react"
import { Helmet } from "react-helmet"
import * as S from "./singUpStyle"

export default function SingUp() {
    const [home, setHome] = useState(true)
    const [login, setLogin] = useState(false)
    const [singUp, setSingUp] = useState(false)


    return (
        <>
            {home && <S.SingUpContainer>
                <Helmet>
                    <title>Coral'l | SingUp</title>
                </Helmet>
                <S.SingUpContent>
                    <S.SingUpTitle>The shopping destination you need</S.SingUpTitle>
                    <S.BtnGetStarted>Get Started</S.BtnGetStarted>
                    <S.Paragraph onClick={() => { setLogin(true); setHome(false) }}>I already have an account</S.Paragraph>
                </S.SingUpContent>
            </S.SingUpContainer>}
            {login && <S.LoginContainer>aaaaa</S.LoginContainer>}
            {singUp && <h1>bbbbbbb</h1>}
        </>

    )
}