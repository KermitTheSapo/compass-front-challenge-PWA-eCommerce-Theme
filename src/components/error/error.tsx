import { useNavigate } from "react-router-dom"
import * as S from "./errorStyle"

export default function Error() {
    const navigate = useNavigate()
    return (
        <S.ErrorContainer>
            <S.Title>404 Error</S.Title>
            <S.Paragraph>Not found</S.Paragraph>
            <S.Button onClick={() => navigate("/")}>Back to home</S.Button>
        </S.ErrorContainer>
    )
}