import * as S from "./trendingStyle"

import spring from "../../../../assets/imgs/home/main/trending/springSummer.png"

export default function Trending() {
    return (
        <S.TrendingContainer>
            <S.Title>Trending Deals</S.Title>
            <S.ImgsDiv>
                <S.ImgPoster src={spring} alt="" />
                <S.ImgPoster src={spring} alt="" />
                <S.ImgPoster src={spring} alt="" />
                <S.ImgPoster src={spring} alt="" />
            </S.ImgsDiv>
        </S.TrendingContainer>
    )
}