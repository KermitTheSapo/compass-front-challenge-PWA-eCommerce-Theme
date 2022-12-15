import * as S from "./productInfoStyle"
import star from "@/assets/imgs/productPage/Star.svg"
import starOn from "@/assets/imgs/productPage/star-on.svg"
import starOff from "@/assets/imgs/productPage/star-off.svg"
import Coupon from "./coupon/coupon"
import { useEffect, useState } from "react"
import { getCoupon } from "../../../products/coupon"
import { getReview } from "../../../products/review"

type Props = {
    name: string;
    value: number;
    safe: number;
    discount: number;
    productParagraph: string;
    id: string;
}

export default function ProductInfo({ name, value, safe, discount, productParagraph, id }: Props) {
    const [Ratings, setRatings] = useState([0])
    const [TotalRatings, setTotalRatings] = useState(0)
    const [couponList, setCouponList] = useState([{
        id: "",
        name: "",
        value: 0,
        code: ""
    }])
    useEffect(() => {
        getCoupon().then((res) => setCouponList(res))
    })
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
    useEffect(() => {
        let value = reviewFilterList.map(item => Number(item.rating))
        setRatings(value)
    }, [reviewFilterList])
    useEffect(() => {
        setTotalRatings(Ratings.reduce((a, b) => a + b, 0))
    }, [Ratings])
    return (
        <S.ProductInfo>
            <S.ProductName>{name}</S.ProductName>
            <S.ProductParagraph>{productParagraph}</S.ProductParagraph>
            <S.ProductValues>
                <S.ProductPrice>${value.toFixed(2)}</S.ProductPrice>
                <S.ProductSafe>{safe}</S.ProductSafe>
                <S.ProductDiscount>{discount}%OFF</S.ProductDiscount>
            </S.ProductValues>
            <S.ProductAverage>
                <S.Ratings>
                    <S.StarImgs>
                        <S.Star src={starOn} alt="filled yellow star" />
                        <S.Star src={starOn} alt="filled yellow star" />
                        <S.Star src={starOn} alt="filled yellow star" />
                        <S.Star src={starOn} alt="filled yellow star" />
                        <S.Star src={starOff} alt="unfilled yellow star" />
                    </S.StarImgs>
                    <S.StarRating>
                        <S.RatingName>({reviewFilterList.length}) Ratings</S.RatingName>
                    </S.StarRating>
                </S.Ratings>
                <S.StarDiv>
                    <S.ValueRating>{Number.isNaN((TotalRatings / reviewFilterList.length)) ? "0" : (TotalRatings / reviewFilterList.length).toFixed(2)}</S.ValueRating>
                    <S.StarImg src={star} alt="big yellow star" />
                </S.StarDiv>
                <S.RatingDiv>
                    <S.RatingTitle>Average Rating</S.RatingTitle>
                    <S.RatingQuantity>{reviewFilterList.length} Ratings & {reviewFilterList.length} Reviews</S.RatingQuantity>
                </S.RatingDiv>
            </S.ProductAverage>
            <S.CouponDiv>
                {couponList.map((item, key) => (
                    <div key={key}>
                        <Coupon name={item.name} code={item.code} />
                    </div>
                ))}
            </S.CouponDiv>
        </S.ProductInfo>
    )
}