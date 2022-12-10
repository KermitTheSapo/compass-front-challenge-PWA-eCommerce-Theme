import * as S from "./optionNavigationStyle"
import arrow from "@/assets/imgs/userProfile/arrowRight.svg"
import arrowOff from "@/assets/imgs/userProfile/arrowRightOff.svg"
import { useNavigate } from "react-router-dom";

type Props = {
    name: string;
    click: () => void;
    state: boolean;
    link: string;
}

export default function OptionNavigation({ name, click, state, link }: Props) {
    const navigate = useNavigate()
    return (
        <S.OptionNavigation onClick={() => { click(); navigate(link) }}>
            <S.SelectorLabel>
                {
                    state ? <S.Selector></S.Selector> : null
                }
                <S.NavigationLabel color={state ? "#1B4B66" : "#13101E"}>{name}</S.NavigationLabel>
            </S.SelectorLabel>
            <S.ImgArrow src={state ? arrow : arrowOff} alt="arrow" />
        </S.OptionNavigation>
    )
}