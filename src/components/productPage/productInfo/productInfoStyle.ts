import styled from "styled-components";

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
    @media (min-width: 768px) {
        font-weight: 600;
        font-size: 2.125rem;
        color: var(--Dark);
        height: 5vh;
    }
`

export const ProductParagraph = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--TypeLowEmphasis);
    @media (min-width: 768px) {
        font-weight: 600;
        font-size: 1.25rem;
    }
`


export const ProductValues = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;
    height: 5vh;
    order: 4;
    @media (min-width: 768px) {
        justify-content: space-between;
        width: 60%;
    }
    @media (max-width: 320px) {
        width: 70%;
    }
`
export const ProductPrice = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--TypeHighEmphasis);
    @media (min-width: 768px) {
        font-weight: 700;
        font-size: 3.25rem;
    }
`
export const ProductSafe = styled.h4`
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--TypeLowEmphasis);
    text-decoration: line-through;
    @media (min-width: 768px) {
        font-weight: 600;
        font-size: 2.125rem;
        color: var(--LightText);
    }
`
export const ProductDiscount = styled.h3`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--DiscountText);
    @media (min-width: 768px) {
        font-weight: 600;
        font-size: 1.25rem;
        color: var(--MajorVibrant);
    }
`
export const ProductAverage = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    width: 70%;
    @media (max-width: 768px) {
        width: 35%;
    }
    @media (max-width: 425px) {
        width: 70%;
    }
    @media (max-width: 320px) {
        width: 90%;
    }
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
    @media (min-width: 769px) {
        display: none;
    }
`
export const RatingDiv = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 769px) {
        display: none;
    }
`

export const Ratings = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    @media (min-width: 1024px) {
        width: 65%;
    }
    @media (max-width: 768px) {
        display: none;
    }
`
export const StarImgs = styled.div`
    display: flex;
    align-items: center;
`
export const StarRating = styled.div`
    display: flex;
    align-items: center;
`
export const Star = styled.img`

`
export const RatingName = styled.p`
    font-weight: 400;
    font-size: 1rem;
    color: var(--LightText);
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
    order: 7;
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
    @media (max-width: 320px) {
        min-width: 270px;
    }
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
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`
export const CouponTerms = styled.p`
    font-weight: 500;
    font-size: 0.625rem;
    color: var(--Primary);
    @media (min-width: 768px) {
        font-size: 0.875rem;
    }
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
    @media (min-width: 768px) {
        font-size:0.875rem;
    }
`
export const CouponCode = styled.h3`
    font-weight: 500;
    font-size: 0.625rem;
    color: var(--TypeHighEmphasis);
    @media (min-width: 768px) {
        font-size:1rem;
    }
`