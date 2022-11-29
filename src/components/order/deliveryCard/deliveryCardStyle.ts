import styled from "styled-components";

export const DeliveryCardContainer = styled.div`
    display: flex;
    align-items: center;
`
export const ImgProduct = styled.img`
    height: 56px;
    width: 56px;
`
export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 12px;
    gap: 5px;
`
export const ProductDate = styled.p`
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--TypeHighEmphasis);
`
export const ProductName = styled.p`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--TypeLowEmphasis);
`
export const ProductParagraph = styled.p`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--TypeLowEmphasis);
`