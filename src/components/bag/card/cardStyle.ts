import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: var(--Bright);
    border-radius: 8px;
    width: 90%;
    padding: 8px 8px 0px 8px;
    margin-bottom: 16px;
`

export const CardInfo = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 14px;
`
export const ImgProduct = styled.img`
    height: 96px;
    width: 96px;
`
export const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const ProductTitle = styled.h2`
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--TypeHighEmphasis);
    text-transform: capitalize;
`
export const ProductParagraph = styled.p`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--TypeLowEmphasis);
`
export const DivQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--Grey);
    border-radius: 4px;
    height: 28px;
    width: 64px;
`
export const QntParagraph = styled.p`
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--TypeLowEmphasis);
`
export const SelectOptions = styled.select`
    background-color: transparent;
    font-weight: 700;
    font-size: 0.75rem;
    color: var(--TypeHighEmphasis);
`

export const Values = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

export const Price = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const Safe = styled.p`
    font-weight: 500;
    font-size: 0.625rem;
    color: var(--TypeLowEmphasis);
`
export const Discount = styled.p`
    font-weight: 500;
    font-size: 0.625rem;
    color: var(--DiscountText);
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 5vh;
`

export const Separator = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--Separator);
`

export const ActionText = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Primary);
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const VerticalSeparator = styled.div`
    height: 80%;
    width: 1px;
    background-color: var(--Separator);
`