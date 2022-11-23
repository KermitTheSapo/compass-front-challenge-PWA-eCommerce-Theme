import { Reset } from "../../assets/styles/reset"
import * as S from "./shortcutStyle"
import Phone from "../assets/shortcut/phone.svg"
import arrow from "../assets/shortcut/arrow.svg"

export default function Shortcut() {
    return (
        <div>
            <Reset />
            <S.ShortcutDiv>
                <S.ShortcutFigure>
                    <S.ImgPhone src={Phone} alt="cell phone image" />
                </S.ShortcutFigure>
                <S.ShortcutContent>
                    <S.ShortcutName>Discover your favorite products faster with CORA’L web app.</S.ShortcutName>
                    <S.ShortcutLink>
                        <S.ShortcutParagraph>Add Shortcut</S.ShortcutParagraph>
                        <img src={arrow} alt="a white arrow to the right" />
                    </S.ShortcutLink>
                </S.ShortcutContent>
            </S.ShortcutDiv>
        </div>
    )
}


