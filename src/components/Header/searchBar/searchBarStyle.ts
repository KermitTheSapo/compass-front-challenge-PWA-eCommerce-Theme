import styled from "styled-components";

export const SearchBar = styled.div`
    background-color: var(--Bright);
    position: fixed;
    top: 50px;
    right: 190px;
    height: 30vh;
    width: 25vw;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 16px;
    overflow: auto;
    &::-webkit-scrollbar { 
      display: none;
    }
`

export const ProductDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
`

export const ImgProduct = styled.img`
    height: 75px;
    width: 80px;
`
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 8vh;
    justify-content: space-evenly;

`
export const ProductName = styled.h3`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
    text-transform: capitalize;
`
export const ProductParagraph = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`
export const ProductPrice = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`

export const ParagraphError = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30vh;
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--Dark);
    text-align: center;
`
