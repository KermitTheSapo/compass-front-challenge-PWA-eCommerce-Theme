import { Helmet } from "react-helmet"
import * as S from "./singUpStyle"

export default function SingUp() {
    return (
        <S.SingUpContainer>
            <Helmet>
                <title>Coral'l | SingUp</title>
            </Helmet>
            <S.SingUpTitle>The shopping destination you need</S.SingUpTitle>
            <button>Get Started</button>
            <p>I already have an account</p>
        </S.SingUpContainer>
    )
}