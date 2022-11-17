import * as S from "./productPageStyle"

import arrow from "../../assets/imgs/productPage/arrowLeft.svg"
import coach from "../../assets/imgs/productPage/coach.png"
import star from "../../assets/imgs/productPage/Star.svg"
import heart from "../../assets/imgs/productPage/heart.svg"
import arrowDown from "../../assets/imgs/productPage/arrow-down.svg"
import arrowUp from "../../assets/imgs/productPage/arrow-up.svg"
import arrowRight from "../../assets/imgs/productPage/arrow-right.svg"
import invite from "../../assets/imgs/productPage/inviteImg.png"
import trending from "../../assets/imgs/productPage/trending.png"

import { useState } from "react"

export default function ProductPage() {
    const [modalProductDescription, setModalProductDescription] = useState(false)

    return (
        <S.ProductPageContainer>
            <S.Header>
                <S.LinkArrow href="/">
                    <S.ImgArrow src={arrow} alt="" />
                </S.LinkArrow>
            </S.Header>
            <S.Content>
                <S.Products>
                    <S.ProductImage src={coach} alt="" />
                    <S.ProductImage src={coach} alt="" />
                    <S.ProductImage src={coach} alt="" />
                </S.Products>
                <S.ProductInfo>
                    <S.ProductName>Coach</S.ProductName>
                    <S.ProductParagraph>Leather Coach Bag with adjustable starps.</S.ProductParagraph>
                    <S.ProductValues>
                        <S.ProductPrice>$54.69</S.ProductPrice>
                        <S.ProductSafe>$69.99</S.ProductSafe>
                        <S.ProductDiscount>20%OFF</S.ProductDiscount>
                    </S.ProductValues>
                    <S.ProductAverage>
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
                <S.DeliveryDetails>
                    <S.DeliveryTitle>Delivery Details</S.DeliveryTitle>
                    <S.DeliveryParagraph>Check estimated delivery date/pickup option.</S.DeliveryParagraph>
                    <S.DeliveryPinCode>
                        <S.DeliveryInput type="text" placeholder="Enter Valid Pincode" />
                        <S.DeliveryBtn>Check</S.DeliveryBtn>
                    </S.DeliveryPinCode>
                </S.DeliveryDetails>
                <S.Separator></S.Separator>
                <S.ProductDescription>
                    <S.ProductHeader>
                        <S.ProductModalTitle>Product Description</S.ProductModalTitle>
                        <S.ArrowProduct onClick={() => modalProductDescription ? setModalProductDescription(false) : setModalProductDescription(true)} src={modalProductDescription ? arrowDown : arrowUp} alt="" />
                    </S.ProductHeader>
                    {modalProductDescription && <S.ProductDescriptionParagraph>
                        Experience comfortable and easy travelling like never before with this coach bag. It features a zip closure, removable straps and multiple organization compartments to keep your valuables safe. Crafted from premium material, it is durable and lasts long.
                    </S.ProductDescriptionParagraph>}

                </S.ProductDescription>
                <S.Separator></S.Separator>
                <S.RatingsReviews>
                    <S.RatingsReviewsTitle>Ratings & Reviews</S.RatingsReviewsTitle>
                    <S.LinkRatings href=""><S.RatingArrow src={arrowRight} alt="" /></S.LinkRatings>
                </S.RatingsReviews>
                <S.Separator></S.Separator>
                <S.InviteFriends>
                    <S.InviteFriendsContent>
                        <S.InviteFriendsTitle>Invite Friends & Earn</S.InviteFriendsTitle>
                        <S.InviteFriendsParagraph>Invite yourGet uptp 100 reward points for every friend you invite</S.InviteFriendsParagraph>
                        <S.LinkInvite>
                            <S.InviteText>Invite Now</S.InviteText>
                            <S.ImgArrowInvite src="" alt="" />
                        </S.LinkInvite>
                    </S.InviteFriendsContent>
                    <S.InviteFriendsPicture>
                        <S.InviteFriendsImg src={invite} alt="" />
                    </S.InviteFriendsPicture>
                </S.InviteFriends>
                <S.Separator></S.Separator>
                <S.AlsoLike>
                    <S.AlsoLikeTitle>You may also like</S.AlsoLikeTitle>
                    <S.AlsoLikeProductsList>
                        <S.AlsoLikeProducts>
                            <S.AlsoLikeImgs src={trending} alt="" />
                            <S.BtnTrending>
                                <S.SpanTrending>Trending</S.SpanTrending>
                            </S.BtnTrending>
                        </S.AlsoLikeProducts>
                        <S.AlsoLikeProducts>
                            <S.AlsoLikeImgs src={trending} alt="" />
                            <S.BtnTrending>
                                <S.SpanTrending>Trending</S.SpanTrending>
                            </S.BtnTrending>
                        </S.AlsoLikeProducts>
                        <S.AlsoLikeProducts>
                            <S.AlsoLikeImgs src={trending} alt="" />
                            <S.BtnTrending>
                                <S.SpanTrending>Trending</S.SpanTrending>
                            </S.BtnTrending>
                        </S.AlsoLikeProducts>
                        <S.AlsoLikeProducts>
                            <S.AlsoLikeImgs src={trending} alt="" />
                            <S.BtnTrending>
                                <S.SpanTrending>Trending</S.SpanTrending>
                            </S.BtnTrending>
                        </S.AlsoLikeProducts>
                        <S.AlsoLikeProducts>
                            <S.AlsoLikeImgs src={trending} alt="" />
                            <S.BtnTrending>
                                <S.SpanTrending>Trending</S.SpanTrending>
                            </S.BtnTrending>
                        </S.AlsoLikeProducts>
                        <S.AlsoLikeProducts>
                            <S.AlsoLikeImgs src={trending} alt="" />
                            <S.BtnTrending>
                                <S.SpanTrending>Trending</S.SpanTrending>
                            </S.BtnTrending>
                        </S.AlsoLikeProducts>
                        <S.AlsoLikeProducts>
                            <S.AlsoLikeImgs src={trending} alt="" />
                            <S.BtnTrending>
                                <S.SpanTrending>Trending</S.SpanTrending>
                            </S.BtnTrending>
                        </S.AlsoLikeProducts>
                    </S.AlsoLikeProductsList>
                </S.AlsoLike>
            </S.Content>
            <S.FooterNav>
                <S.heartDiv>
                    <S.ImgHeart src={heart} alt="" />
                </S.heartDiv>
                <S.ButtonAdd>Add to Bag</S.ButtonAdd>
            </S.FooterNav>
        </S.ProductPageContainer>
    )
}