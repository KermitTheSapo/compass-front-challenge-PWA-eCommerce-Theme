import { Reset } from "../../assets/styles/reset"
import * as S from "./buttonsAndChipsStyle"
import placeholder from "../assets/buttonsAndChips/placeholder.svg"
export default function ButtonsAndChips() {
    return (
        <S.ButtonsAndChipsContainer>
            <Reset />
            <S.Img src={placeholder} alt="" />
            <S.Title>Label</S.Title>
            <S.Img src={placeholder} alt="" />
        </S.ButtonsAndChipsContainer>
    )
}

