import * as S from "./ratingsStyle"
import star from "@/assets/imgs/productPage/reviews/star.svg"
import img from "@/assets/imgs/productPage/reviews/image.png"
export default function Ratings() {
    return (
        <S.RatingsContainer>
            <S.HeaderInformation>
                <S.RatingsPill>
                    <S.RatingNumber>4.0</S.RatingNumber>
                    <S.StarImg src={star} alt="star icon" />
                </S.RatingsPill>
                <S.RatingsPersonInfo>
                    <S.RatingsPersonName>John Doe</S.RatingsPersonName>
                    <S.RatingsPersonDate>12/12/2020</S.RatingsPersonDate>
                </S.RatingsPersonInfo>
            </S.HeaderInformation>
            <S.Content>
                <S.RatingsTitle>Must go for the class feel.</S.RatingsTitle>
                <S.RatingsDescription>Totally amazing! I loved the material and the quality. It has a jolly vibe in it which makes me feel happy every time I put it on.</S.RatingsDescription>
            </S.Content>
            <S.ImgsCarousel>
                <S.ImgCarousel src={img} alt="product img" />
                <S.ImgCarousel src={img} alt="product img" />
                <S.ImgCarousel src={img} alt="product img" />
                <S.ImgCarousel src={img} alt="product img" />
                <S.ImgCarousel src={img} alt="product img" />
                <S.ImgCarousel src={img} alt="product img" />
            </S.ImgsCarousel>
        </S.RatingsContainer>
    )
}