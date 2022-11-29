import * as S from "./reviewsStyle"

import arrowLeft from "@/assets/imgs/productPage/reviews/arrowLeft.svg"
import { useNavigate } from "react-router-dom";
import Head from "./head/head";
import Ratings from "./ratings/ratings";
import { Helmet } from "react-helmet";



export default function Reviews() {
    const navigate = useNavigate();

    return (
        <S.ReviewsContainer>
            <Helmet>
                <title>Coral'l | Reviews</title>
            </Helmet>
            <S.HeaderNav>
                <S.ImgNavArrow onClick={() => navigate(-1)} src={arrowLeft} alt="" />
            </S.HeaderNav>
            <Head />
            <S.Separator></S.Separator>
            <Ratings />
            <Ratings />
            <Ratings />
            <Ratings />
            <Ratings />
            <S.ButtonAdd>
                <S.ButtonAddText onClick={() => navigate("/addReview")}>Write a Review</S.ButtonAddText>
            </S.ButtonAdd>
        </S.ReviewsContainer>
    )
}