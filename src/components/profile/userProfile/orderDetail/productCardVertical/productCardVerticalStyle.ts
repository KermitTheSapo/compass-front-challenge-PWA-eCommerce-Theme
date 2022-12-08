import styled from "styled-components";


export const ProductCardVerticalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ProductNameDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const ProductImg = styled.img`
    height: 80px;
    width: 75px;
    border-radius: 8px;
`
export const ProductNameInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 9vh;
`
export const ProductName = styled.h3`
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 500;
    color: var(--TypeHighEmphasis);
`
export const ProductDescription = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: var(--TypeLowEmphasis);
`
export const ProductPriceInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 8vh;
    width: 50%;
`
export const ProductValue = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--TypeHighEmphasis);
`
export const ProductQuantity = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--TypeHighEmphasis);
`
export const ProductSubTotal = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--TypeHighEmphasis);
`