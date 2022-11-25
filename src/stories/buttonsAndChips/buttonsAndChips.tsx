import { Reset } from "../../assets/styles/reset"
import * as S from "./buttonsAndChipsStyle"
import placeholder from "../assets/buttonsAndChips/placeholder.svg"

interface ButtonsAndChipsProps {
    label: string;
    backgroundColor: string;
}
export default function ButtonsAndChips({ label, backgroundColor }: ButtonsAndChipsProps) {
    return (
        <S.ButtonsAndChipsContainer color={backgroundColor}>
            <Reset />
            <S.Img src={placeholder} alt="" />
            <S.Title>{label}</S.Title>
            <S.Img src={placeholder} alt="" />
        </S.ButtonsAndChipsContainer>
    )
}

