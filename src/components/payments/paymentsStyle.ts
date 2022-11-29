import styled from "styled-components";

export const PaymentsContainer = styled.div`
    display: flex;
    flex-direction: column;

`

export const PaymentsHeader = styled.header`
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 56px;
    background-color: var(--Bright);
`
export const ImgArrowBack = styled.img`
    margin-right: 20px;
`
export const PaymentsTitle = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
`

export const Separator = styled.div`
    height: 8px;
    background-color: var(--Grey);
    width: 100%;
`

export const ProductDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 48px;
`
export const ProductDetailsTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const ImgArrow = styled.img`

`

export const PaymentMethod = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    background-color: var(--Bright);
`

export const PaymentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
`
export const PaymentMethodTitle = styled.h2`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`

export const BtnPayNowDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 66px;
    background-color: var(--Bright);
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
`

export const BtnPay = styled.button`
    width: 90%;
    height: 44px;
    border-radius: 8px;
    background-color: var(--Primary);
    border: none;
    outline: none;
    color: var(--Bright);
    font-weight: 600;
    font-size: 0.875rem;
`