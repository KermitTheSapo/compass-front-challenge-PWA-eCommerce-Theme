import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 15vh;
`


export const ImgProduct = styled.img`
    height: 75px;
    width: 80px;
`
export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 89%;
    gap: 5px;
`
export const ProductInformation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ProductName = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
    text-transform: capitalize;
`

export const ProductValues = styled.div`
    display: flex;
    align-items: center;
    width: 57%;
    justify-content: space-between;
`

export const ProductPrice = styled.p`
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const ProductQuantity = styled.p`
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const ProductSubtotal = styled.p`
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const ProductParagraph = styled.p`
    font-weight: 400;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`
export const ButtonsAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 56px;
`
export const WishlistParagraph = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Primary);
    text-decoration: underline;
`
export const RemoveParagraph = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Error);
    text-decoration: underline;
`