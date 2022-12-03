import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`
export const ImgProduct = styled.img`
    height: 80px;
    width: 75px;   
`
export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
`
export const ProductName = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
    text-transform: capitalize;
`
export const ProductDescription = styled.p`
    font-weight: 400;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`
export const ProductQuantity = styled.p`
    font-weight: 400;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`

