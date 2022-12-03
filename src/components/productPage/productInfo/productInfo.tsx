import * as S from "./productInfoStyle"
import star from "@/assets/imgs/productPage/Star.svg"
import starOn from "@/assets/imgs/productPage/star-on.svg"
import starOff from "@/assets/imgs/productPage/star-off.svg"
import Coupon from "./coupon/coupon"
import { useEffect, useState } from "react"
import { getCoupon } from "../../../products/coupon"

type Props = {
    name: string;
    value: number;
    safe: number;
    discount: number;
    productParagraph: string;
    ratings: number;
}

export default function ProductInfo({ name, value, safe, discount, productParagraph, ratings }: Props) {
    const [couponList, setCouponList] = useState([{
        id: "",
        name: "",
        value: 0,
        code: ""
    }])
    useEffect(() => {
        getCoupon().then((res) => setCouponList(res))
    })
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
                        <S.RatingName>({ratings}) Ratings</S.RatingName>
                    </S.StarRating>
                </S.Ratings>
                <S.StarDiv>
                    <S.ValueRating>4.5</S.ValueRating>
                    <S.StarImg src={star} alt="big yellow star" />
                </S.StarDiv>
                <S.RatingDiv>
                    <S.RatingTitle>Average Rating</S.RatingTitle>
                    <S.RatingQuantity>43 Ratings & 23 Reviews</S.RatingQuantity>
                </S.RatingDiv>
            </S.ProductAverage>
            <S.CouponDiv>
                {couponList.map((item) => (
                    <Coupon name={item.name} code={item.code} />
                ))}
            </S.CouponDiv>
        </S.ProductInfo>
    )
}