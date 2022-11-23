import { Reset } from "../../assets/styles/reset"
import * as S from "./searchBarStyle"

import arrowLeft from "../assets/searchBar/arrowLeft.svg"
import placeholder from "../assets/searchBar/placeholder.svg"
export default function SideNavigationMenu() {
    return (
        <S.SearchBarContainer>
            <Reset />
            <S.Img src={arrowLeft} alt="" />
            <S.Input type="text" placeholder="Search" />
            <S.Img src={placeholder} alt="" />
            <S.Img src={placeholder} alt="" />
        </S.SearchBarContainer>
    )
}

