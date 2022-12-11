import * as S from "./myReviewsStyle"
import arrow from "@/assets/imgs/myReviews/arrowLeft.svg"
import options from "@/assets/imgs/myReviews/options.svg"
import { useNavigate } from "react-router-dom"
import ReviewCard from "./reviewCard/reviewCard";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { getReview } from "../../products/review";


export default function MyReviews() {
    const navigate = useNavigate();
    const [review, setReview] = useState([{
        date: "",
        description: "",
        rating: "",
        title: "",
        userName: ""
    }])
    useEffect(() => {
        getReview().then(res => setReview(res))
    }, [])
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
                {
                    review && review.map((item) => (
                        <ReviewCard date={item.date} title={item.title} paragraph={item.description} description={item.description} rating={item.rating} />
                    ))
                }
            </S.ReviewContent>
        </S.MyReviewsContainer>
    )
}