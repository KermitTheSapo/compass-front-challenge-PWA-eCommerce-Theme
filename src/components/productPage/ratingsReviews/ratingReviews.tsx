import * as S from "./ratingReviewsStyle"
import arrowRight from "@/assets/imgs/productPage/arrow-right.svg"
import { useNavigate } from "react-router-dom"

export default function RatingReviews() {
    const navigate = useNavigate()
    return (
        <S.RatingsReviews>
            <S.RatingsReviewsTitle>Ratings & Reviews</S.RatingsReviewsTitle>
            <S.LinkRatings onClick={() => navigate("/reviews")}><S.RatingArrow src={arrowRight} alt="an arrow to the right" /></S.LinkRatings>
        </S.RatingsReviews>
    )
}