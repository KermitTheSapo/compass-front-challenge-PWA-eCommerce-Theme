import { Reset } from "../../assets/styles/reset"
import * as S from "./sideNavigationMenuStyle"
import Arrow from "../assets/sideNavigationMenu/arrow-right.svg"
export default function SideNavigationMenu() {
    return (
        <S.SideNavigationMenuContainer>
            <Reset />
            <h1>Label</h1>
            <img src={Arrow} alt="" />
        </S.SideNavigationMenuContainer>
    )
}

