import * as S from "./reviewsStyle"

import arrowLeft from "@/assets/imgs/productPage/reviews/arrowLeft.svg"
import { useLocation, useNavigate } from "react-router-dom";
import Head from "./head/head";
import Ratings from "./ratings/ratings";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { getReview } from "../../../products/review";

export default function Reviews() {
    const navigate = useNavigate();
    // @ts-ignore
    let params = new URL(document.location).searchParams;
    let id = params.get("id") as string;
    let location = useLocation();
    const [reviewList, setReviewList] = useState([{
        date: "",
        description: "",
        productId: "",
        rating: "",
        title: "",
        userName: "",
        image: ""
    }])
    const [reviewFilterList, setReviewFilterList] = useState([{
        date: "",
        description: "",
        productId: "",
        rating: "",
        title: "",
        userName: "",
        image: ""
    }])
    useEffect(() => {
        getReview().then((res) => setReviewList(res))
    }, [location])
    useEffect(() => {
        if (reviewList.length !== 0) {
            setReviewFilterList(reviewList.filter((item) => item.productId.includes(id)))
        }
    }, [reviewList, location])
    return (
        <S.ReviewsContainer>
            <Helmet>
                <title>Coral'l | Reviews</title>
            </Helmet>
            <S.HeaderNav>
                <S.ImgNavArrow onClick={() => navigate(-1)} src={arrowLeft} alt="left arrow icon" />
            </S.HeaderNav>
            <Head id={id} state={reviewFilterList} />
            <S.Separator></S.Separator>
            <S.ReviewDiv>
                {reviewFilterList && reviewFilterList.map((item, key) => (
                    <div key={key}>
                        <Ratings date={item.date} description={item.description} rating={item.rating} title={item.title} userName={item.userName} image={item.image} />
                    </div>
                ))}
            </S.ReviewDiv>
            <S.ButtonAdd>
                <S.ButtonAddText onClick={() => navigate(`/addReview?id=${id}`)}>Write a Review</S.ButtonAddText>
            </S.ButtonAdd>
        </S.ReviewsContainer>
    )
}