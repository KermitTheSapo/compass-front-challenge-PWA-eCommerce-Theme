import * as S from "./sideNavigationStyle"
import arrowRight from "@/assets/imgs/profile/arrowRight.svg"
import { useNavigate } from "react-router-dom"

type Props = {
    name: string;
    path: string;
}

export default function SideNavigation({ name, path }: Props) {
    const navigate = useNavigate()

    return (
        <S.SideNavigationContainer>
            <S.Label>{name}</S.Label>
            <S.ImgArrow onClick={() => { navigate(path) }} src={arrowRight} alt="" />
        </S.SideNavigationContainer>
    )
}