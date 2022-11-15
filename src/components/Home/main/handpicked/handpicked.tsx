import * as S from "./handpickedStyle"

import personalCare from "../../../../assets/imgs/home/handpicked/personalCare.png"
import sunglasses from "../../../../assets/imgs/home/handpicked/sunglasses.png"
import handbags from "../../../../assets/imgs/home/handpicked/handbags.png"
import wristWatches from "../../../../assets/imgs/home/handpicked/wristWatches.png"

export default function Handpicked() {
    return (
        <S.HandpickedContainer>
            <S.Title>Handpicked Collections</S.Title>
            <S.Collections>
                <a href="/error">
                    <S.ImgCollections src={personalCare} alt="" />
                </a>
                <a href="/error">
                    <S.ImgCollections src={sunglasses} alt="" />
                </a>
                <a href="/error">
                    <S.ImgCollections src={handbags} alt="" />
                </a>
                <a href="/error">
                    <S.ImgCollections src={wristWatches} alt="" />
                </a>
            </S.Collections>
        </S.HandpickedContainer>
    )
}