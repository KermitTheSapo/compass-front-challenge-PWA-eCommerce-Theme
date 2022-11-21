import * as S from "./handpickedStyle"

import personalCare from "../../../../assets/imgs/home/handpicked/personalCare.png"
import sunglasses from "../../../../assets/imgs/home/handpicked/sunglasses.png"
import handbags from "../../../../assets/imgs/home/handpicked/handbags.png"
import wristWatches from "../../../../assets/imgs/home/handpicked/wristWatches.png"
import { useNavigate } from "react-router-dom"

export default function Handpicked() {

    const navigate = useNavigate()

    return (
        <S.HandpickedContainer>
            <S.Title>Handpicked Collections</S.Title>
            <S.Collections>
                <a onClick={() => navigate("/error")}>
                    <S.ImgCollections src={personalCare} alt="picture of a perfume" />
                </a>
                <a onClick={() => navigate("/error")}>
                    <S.ImgCollections src={sunglasses} alt="picture of a sunglasses" />
                </a>
                <a onClick={() => navigate("/handbags")}>
                    <S.ImgCollections src={handbags} alt="image of a pink handbag" />
                </a>
                <a onClick={() => navigate("/watches")}>
                    <S.ImgCollections src={wristWatches} alt="image of a wristwatch" />
                </a>
            </S.Collections>
        </S.HandpickedContainer>
    )
}