import * as S from "./ratingsStyle"
import star from "@/assets/imgs/productPage/reviews/star.svg"
import img from "@/assets/imgs/productPage/reviews/image.png"

type Props = {
    date: string;
    description: string;
    productId: string;
    rating: string;
    title: string;
    userName: string;
}

export default function Ratings({ date, description, productId, rating, title, userName }: Props) {
    return (
        <S.RatingsContainer>
            <S.HeaderInformation>
                <S.RatingsPill>
                    <S.RatingNumber>{rating}.0</S.RatingNumber>
                    <S.StarImg src={star} alt="star icon" />
                </S.RatingsPill>
                <S.RatingsPersonInfo>
                    <S.RatingsPersonName>{userName}</S.RatingsPersonName>
                    <S.RatingsPersonDate>{date}</S.RatingsPersonDate>
                </S.RatingsPersonInfo>
            </S.HeaderInformation>
            <S.Content>
                <S.RatingsTitle>{title}</S.RatingsTitle>
                <S.RatingsDescription>{description}</S.RatingsDescription>
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