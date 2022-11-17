import styled from "styled-components";

export const ProductPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    padding: 0 16px;
    display: flex;
    align-items: center;
    height: 56px;
    position: fixed;
    top: 0;
    background-color: var(--Bright);
    width: 100%;
`

export const LinkArrow = styled.a`

`

export const ImgArrow = styled.img`

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 56px;
    justify-content: space-evenly;
`

export const Products = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    overflow: auto;
    min-width: 100%;
    padding: 0 16px;
    &::-webkit-scrollbar { 
      display: none;
    }
`

export const ProductImage = styled.img`
    width: 95%;    
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
`
export const ProductName = styled.h1`
    font-size: 1rem;
    font-weight: 500;
    color: var(--TypeHighEmphasis);
    display: flex;
    align-items: center;
    height: 4vh;
`

export const ProductParagraph = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--TypeLowEmphasis);
`


export const ProductValues = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;
    height: 5vh;
`
export const ProductPrice = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--TypeHighEmphasis);
`
export const ProductSafe = styled.h4`
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--TypeLowEmphasis);
    text-decoration: line-through;
`
export const ProductDiscount = styled.h3`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--DiscountText);
`
export const ProductAverage = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    width: 70%;
`

export const ValueRating = styled.h3`
    font-weight: 600;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`
export const StarImg = styled.img``

export const StarDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 38px;
    width: 74px;
    border-radius: 4px;
    background-color: var(--Accent);
`
export const RatingDiv = styled.div`
    display: flex;
    flex-direction: column;
`
export const RatingTitle = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const RatingQuantity = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`

export const CouponDiv = styled.div`
    display: flex;
    align-items: center;
    overflow: auto;
    min-width: 100%;
    gap: 15px;
    height: 13vh;
    &::-webkit-scrollbar { 
      display: none;
    }
`
export const Coupon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    min-width: 328px;
    border-radius: 8px;
    border: 1px solid var(--Primary);
    padding: 0 12px;
`
export const CouponInfo = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`
export const CouponTitle = styled.h3`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--TypeHighEmphasis);
    width: 70%;
`
export const CouponTerms = styled.p`
    font-weight: 500;
    font-size: 0.625rem;
    color: var(--Primary);
`
export const CouponValue = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

`
export const CouponCodeName = styled.p`
    font-weight: 500;
    font-size: 0.625rem;
    color: var(--TypeLowEmphasis);
`
export const CouponCode = styled.h3`
    font-weight: 500;
    font-size: 0.625rem;
    color: var(--TypeHighEmphasis);
`

export const FooterNav = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: var(--Bright);
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 66px;
`

export const heartDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 8px;
    background-color: var(--Accent);
`

export const ImgHeart = styled.img``

export const ButtonAdd = styled.button`
    width: 272px;
    height: 44px;
    border-radius: 8px;
    background-color: var(--Primary);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--Bright);
    border: none;
    outline: none;
`

export const DeliveryDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 16px;
    height: 12vh;
    margin-bottom: 10px;
`
export const DeliveryTitle = styled.h3`
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--TypeHighEmphasis);
`
export const DeliveryParagraph = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--TypeLowEmphasis);
`
export const DeliveryPinCode = styled.form`
    display: flex;
    background-color: var(--Grey);
    height: 46px;
`
export const DeliveryInput = styled.input`
    height: 100%;
    width: 90%;
    background-color: transparent;
    padding: 0 16px;
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    border: none;
`
export const DeliveryBtn = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Primary);
    text-transform: uppercase;

`
export const Separator = styled.div`
    width: 100%;
    height: 8px;
    background-color: var(--Grey);
`

export const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
`
export const ProductHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
`
export const ProductModalTitle = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const ArrowProduct = styled.img`

`
export const ProductDescriptionParagraph = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    line-height: 18px;
    margin-bottom: 15px;
`

export const RatingsReviews = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 48px;
`
export const RatingsReviewsTitle = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const RatingArrow = styled.img``

export const LinkRatings = styled.a`
    text-decoration: none;
`


export const InviteFriends = styled.div`
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 14vh;
`
export const InviteFriendsContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;
`
export const InviteFriendsTitle = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const InviteFriendsParagraph = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`
export const LinkInvite = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
`
export const InviteText = styled.h4`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Primary);
`
export const ImgArrowInvite = styled.img`

`
export const InviteFriendsPicture = styled.picture`

`
export const InviteFriendsImg = styled.img`

`


export const AlsoLike = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 16px;
    gap: 10px;
    margin-bottom: 80px;
    height: 23vh;
`
export const AlsoLikeTitle = styled.h3`
    font-weight: 600;
`
export const AlsoLikeProductsList = styled.div`
    display: flex;
    align-items: center;
    overflow: auto;
    min-width: 100%;
    gap: 10px;
    justify-content: flex-start;
    &::-webkit-scrollbar { 
      display: none;
    }
`
export const AlsoLikeImgs = styled.img`
`

export const AlsoLikeProducts = styled.div`
    display: flex;
    width: 136px;
`
export const BtnTrending = styled.div`
    border-radius: 4px;
    background-color: var(--Highlight);
    height: 18.25px;
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 10px;
    right: 60px;
    z-index: 2;
`

export const SpanTrending = styled.span`
    font-weight: 500;
    font-size: 0.625rem;
    color: var(--TypeBright);
`
// export const XX = styled.div``