import styled from "styled-components";

export const OrderCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 104px;
    border-radius: 8px;
    background-color: var(--Grey);
    padding: 16px 16px;
`
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
`
export const DateText = styled.p`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--ParagraphDateOrderCard);
`
export const CodeText = styled.h3`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`
export const PriceText = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`
export const CardImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ImgArrow = styled.img`

`