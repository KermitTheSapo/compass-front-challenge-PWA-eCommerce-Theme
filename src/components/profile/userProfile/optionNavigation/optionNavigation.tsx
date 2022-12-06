import * as S from "./optionNavigationStyle"
import arrow from "@/assets/imgs/userProfile/arrowRight.svg"
import arrowOff from "@/assets/imgs/userProfile/arrowRightOff.svg"

type Props = {
    name: string;
    click: () => void;
    state: boolean;
}

export default function OptionNavigation({ name, click, state }: Props) {
    return (
        <S.OptionNavigation onClick={() => click()}>
            <S.SelectorLabel>
                {
                    state ? <S.Selector></S.Selector> : null
                }
                <S.NavigationLabel color={state ? "#1B4B66" : "#13101E"}>{name}</S.NavigationLabel>
            </S.SelectorLabel>
            <S.ImgArrow src={state ? arrow : arrowOff} alt="" />
        </S.OptionNavigation>
    )
}