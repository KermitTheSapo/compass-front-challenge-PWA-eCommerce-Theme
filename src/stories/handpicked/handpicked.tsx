import { Reset } from "../../assets/styles/reset"
import * as S from "./handpickedStyle"

import personalCare from "../assets/handpicked/personalCare.png"
import sunglasses from "../assets/handpicked/sunglasses.png"
import handbags from "../assets/handpicked/handbags.png"
import wristWatches from "../assets/handpicked/wristWatches.png"
export default function HorizontalCardsProduct() {
    return (
        <div>
            <Reset />
            <S.HandpickedContainer>
                <S.Title>Handpicked Collections</S.Title>
                <S.Collections>
                    <a>
                        <S.ImgCollections src={personalCare} alt="picture of a perfume" />
                    </a>
                    <a>
                        <S.ImgCollections src={sunglasses} alt="picture of a sunglasses" />
                    </a>
                    <a>
                        <S.ImgCollections src={handbags} alt="image of a pink handbag" />
                    </a>
                    <a >
                        <S.ImgCollections src={wristWatches} alt="image of a wristwatch" />
                    </a>
                </S.Collections>
            </S.HandpickedContainer>
        </div>
    )
}


