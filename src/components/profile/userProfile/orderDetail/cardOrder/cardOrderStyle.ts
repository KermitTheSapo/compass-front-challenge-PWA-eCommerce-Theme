import styled from "styled-components";

export const CardOrderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const ImgProduct = styled.img`
    height: 120px;
    width: 120px;
`
export const DivContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 110px;
`
export const ProductTitle = styled.h3`
    font-weight: 600;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--TypeHighEmphasis);
    text-transform: capitalize;
`
export const ProductDescription = styled.p`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--TypeLowEmphasis);
`
export const ProductPrice = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const ProductQuantity = styled.p`
    font-weight: 500;
    font-size: 0.75rem;
    color: var(--TypeLowEmphasis);
`
export const AddToBagBtn = styled.button`
    height: 36px;
    border-radius: 8px;
    background-color: transparent;
    border: 2px solid var(--Primary);
    color: var(--Primary);
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;

`