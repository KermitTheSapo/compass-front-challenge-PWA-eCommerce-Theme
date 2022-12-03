import styled from "styled-components";


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
    width: 100%;
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