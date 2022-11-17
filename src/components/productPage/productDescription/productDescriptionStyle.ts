import styled from "styled-components";

export const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    @media (min-width: 768px) {
        display: none;
    }
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
