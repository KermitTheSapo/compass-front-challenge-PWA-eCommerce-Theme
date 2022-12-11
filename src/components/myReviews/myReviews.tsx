import * as S from "./myReviewsStyle"
import arrow from "@/assets/imgs/myReviews/arrowLeft.svg"
import options from "@/assets/imgs/myReviews/options.svg"
import { useNavigate } from "react-router-dom"
import ReviewCard from "./reviewCard/reviewCard";
import { Helmet } from "react-helmet";


export default function MyReviews() {
    const navigate = useNavigate();
    return (
        <S.MyReviewsContainer>
            <Helmet>
                <title>Coral'l | My Reviews</title>
            </Helmet>
            <S.ReviewsHeader>
                <S.TrailingIcon>
                    <S.ImgArrow onClick={() => navigate(-1)} src={arrow} alt="left arrow image" />
                    <S.ReviewsTitle>My reviews</S.ReviewsTitle>
                </S.TrailingIcon>
                <S.ImgOptions src={options} alt="icon of 3 vertically aligned dots" />
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