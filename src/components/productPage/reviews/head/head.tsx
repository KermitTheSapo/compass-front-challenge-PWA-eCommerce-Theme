import * as S from "./headStyle"
import star from "@/assets/imgs/productPage/reviews/star.svg"
import img from "@/assets/imgs/productPage/reviews/image.png"
import Stats from "./stats/stats"

export default function Head() {
    return (
        <S.HeadContainer>
            <S.ProductHead>
                <S.ProductHeadTitle>Boujee</S.ProductHeadTitle>
                <S.ProductHeadSubTitle>Baker Solid Black Washable Shoulder Bag</S.ProductHeadSubTitle>
            </S.ProductHead>
            <S.Ratings>
                <S.AverageRatings>
                    <S.AverageRatingsNumber>4.5</S.AverageRatingsNumber>
                    <S.AverageRatingsStar src={star} alt="star icon" />
                    <S.AverageTitle>Average Rating</S.AverageTitle>
                </S.AverageRatings>
                <Stats />
            </S.Ratings>
            <S.Photos>
                <S.PhotosTitle>Customer Photos</S.PhotosTitle>
                <S.PhotoCarousel>
                    <S.ImgCarousel src={img} alt="product img" />
                    <S.ImgCarousel src={img} alt="product img" />
                    <S.ImgCarousel src={img} alt="product img" />
                    <S.ImgCarousel src={img} alt="product img" />
                    <S.ImgCarousel src={img} alt="product img" />
                    <S.ImgCarousel src={img} alt="product img" />
                    <S.ImgCarousel src={img} alt="product img" />
                </S.PhotoCarousel>
            </S.Photos>
        </S.HeadContainer>
    )
}