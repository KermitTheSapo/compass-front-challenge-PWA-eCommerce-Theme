import * as S from "./ratingsStyle"
import star from "@/assets/imgs/productPage/reviews/star.svg"

type Props = {
    date: string;
    description: string;
    rating: string;
    title: string;
    userName: string;
    image: string;
}

export default function Ratings({ date, description, rating, title, userName, image }: Props) {
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
            {
                image === "" ? null : <S.ImgsCarousel>
                    <S.ImgCarousel src={image} alt="product img" />
                </S.ImgsCarousel>
            }
        </S.RatingsContainer>
    )
}