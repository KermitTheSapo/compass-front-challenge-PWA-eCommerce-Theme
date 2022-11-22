import * as S from "./trendingStyle"

import spring from "@/assets/imgs/home/main/trending/springSummer.png"

export default function Trending() {
    return (
        <S.TrendingContainer>
            <S.Title>Trending Deals</S.Title>
            <S.ImgsDiv>
                <S.ImgPoster src={spring} alt="image of a woman with the yellow background written 'spring summer collection'" />
                <S.ImgPoster src={spring} alt="image of a woman with the yellow background written 'spring summer collection'" />
                <S.ImgPoster src={spring} alt="image of a woman with the yellow background written 'spring summer collection'" />
                <S.ImgPoster src={spring} alt="image of a woman with the yellow background written 'spring summer collection'" />
            </S.ImgsDiv>
        </S.TrendingContainer>
    )
}