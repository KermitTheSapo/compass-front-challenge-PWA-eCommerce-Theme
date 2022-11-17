import * as S from "./ratingReviewsStyle"
import arrowRight from "../../../assets/imgs/productPage/arrow-right.svg"

export default function RatingReviews() {
    return (
        <S.RatingsReviews>
            <S.RatingsReviewsTitle>Ratings & Reviews</S.RatingsReviewsTitle>
            <S.LinkRatings href=""><S.RatingArrow src={arrowRight} alt="" /></S.LinkRatings>
        </S.RatingsReviews>
    )
}