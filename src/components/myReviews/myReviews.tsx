import * as S from "./myReviewsStyle"
import arrow from "@/assets/imgs/myReviews/arrowLeft.svg"
import options from "@/assets/imgs/myReviews/options.svg"
import { useNavigate } from "react-router-dom"
import ReviewCard from "./reviewCard/reviewCard";


export default function MyReviews() {
    const navigate = useNavigate();
    return (
        <S.MyReviewsContainer>
            <S.ReviewsHeader>
                <S.TrailingIcon>
                    <S.ImgArrow onClick={() => navigate(-1)} src={arrow} alt="" />
                    <S.ReviewsTitle>My reviews</S.ReviewsTitle>
                </S.TrailingIcon>
                <S.ImgOptions src={options} alt="" />
            </S.ReviewsHeader>
            <S.ReviewContent>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </S.ReviewContent>
        </S.MyReviewsContainer>
    )
}