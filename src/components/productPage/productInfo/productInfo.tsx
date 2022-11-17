import * as S from "./productInfoStyle"
import star from "../../../assets/imgs/productPage/Star.svg"
import starOn from "../../../assets/imgs/productPage/star-on.svg"
import starOff from "../../../assets/imgs/productPage/star-off.svg"

export default function ProductInfo() {
    return (
        <S.ProductInfo>
            <S.ProductName>Coach</S.ProductName>
            <S.ProductParagraph>Leather Coach Bag with adjustable starps.</S.ProductParagraph>
            <S.ProductValues>
                <S.ProductPrice>$54.69</S.ProductPrice>
                <S.ProductSafe>$69.99</S.ProductSafe>
                <S.ProductDiscount>20%OFF</S.ProductDiscount>
            </S.ProductValues>
            <S.ProductAverage>
                <S.Ratings>
                    <S.StarImgs>
                        <S.Star src={starOn} alt="" />
                        <S.Star src={starOn} alt="" />
                        <S.Star src={starOn} alt="" />
                        <S.Star src={starOn} alt="" />
                        <S.Star src={starOff} alt="" />
                    </S.StarImgs>
                    <S.StarRating>
                        <S.RatingName>(250) Ratings</S.RatingName>
                    </S.StarRating>
                </S.Ratings>
                <S.StarDiv>
                    <S.ValueRating>4.5</S.ValueRating>
                    <S.StarImg src={star} alt="" />
                </S.StarDiv>
                <S.RatingDiv>
                    <S.RatingTitle>Average Rating</S.RatingTitle>
                    <S.RatingQuantity>43 Ratings & 23 Reviews</S.RatingQuantity>
                </S.RatingDiv>
            </S.ProductAverage>
            <S.CouponDiv>
                <S.Coupon>
                    <S.CouponInfo>
                        <S.CouponTitle>Get upto 30% Off on order value above $100</S.CouponTitle>
                        <S.CouponTerms>Terms & Conditions</S.CouponTerms>
                    </S.CouponInfo>
                    <S.CouponValue>
                        <S.CouponCodeName>Use Code</S.CouponCodeName>
                        <S.CouponCode>ORDER100</S.CouponCode>
                    </S.CouponValue>
                </S.Coupon>
                <S.Coupon>
                    <S.CouponInfo>
                        <S.CouponTitle>Get upto 30% Off on order value above $100</S.CouponTitle>
                        <S.CouponTerms>Terms & Conditions</S.CouponTerms>
                    </S.CouponInfo>
                    <S.CouponValue>
                        <S.CouponCodeName>Use Code</S.CouponCodeName>
                        <S.CouponCode>ORDER100</S.CouponCode>
                    </S.CouponValue>
                </S.Coupon>
                <S.Coupon>
                    <S.CouponInfo>
                        <S.CouponTitle>Get upto 30% Off on order value above $100</S.CouponTitle>
                        <S.CouponTerms>Terms & Conditions</S.CouponTerms>
                    </S.CouponInfo>
                    <S.CouponValue>
                        <S.CouponCodeName>Use Code</S.CouponCodeName>
                        <S.CouponCode>ORDER100</S.CouponCode>
                    </S.CouponValue>
                </S.Coupon>
            </S.CouponDiv>
        </S.ProductInfo>
    )
}