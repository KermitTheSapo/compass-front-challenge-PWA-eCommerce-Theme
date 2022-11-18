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
                    <S.ImgCollections src={personalCare} alt="" />
                </a>
                <a onClick={() => navigate("/error")}>
                    <S.ImgCollections src={sunglasses} alt="" />
                </a>
                <a onClick={() => navigate("/error")}>
                    <S.ImgCollections src={handbags} alt="" />
                </a>
                <a onClick={() => navigate("/error")}>
                    <S.ImgCollections src={wristWatches} alt="" />
                </a>
            </S.Collections>
        </S.HandpickedContainer>
    )
}