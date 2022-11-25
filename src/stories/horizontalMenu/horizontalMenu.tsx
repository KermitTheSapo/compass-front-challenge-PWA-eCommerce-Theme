import { Reset } from "../../assets/styles/reset"
import * as S from "./horizontalMenuStyle"

import placeholder from "../assets/horizontalMenu/placeholder.svg"

interface HorizontalMenuProps {
    label: string,
    backgroundColor: string,
    colorLabel: string
}

export default function HorizontalMenu({ label, backgroundColor, colorLabel }: HorizontalMenuProps) {
    return (
        <S.HorizontalMenuContainer color={backgroundColor}>
            <Reset />
            <img src={placeholder} alt="" />
            <S.Label color={colorLabel}>{label}</S.Label>
            <img src={placeholder} alt="" />
        </S.HorizontalMenuContainer>
    )
}

