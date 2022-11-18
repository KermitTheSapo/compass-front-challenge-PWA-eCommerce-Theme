import styled from "styled-components";

export const Products = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    overflow: auto;
    min-width: 100%;
    padding: 0 16px;
    &::-webkit-scrollbar { 
      display: none;
    }
    @media (min-width: 768px) {
        display: none;
    } 
`

export const ProductImage = styled.img`
    min-width: 95%;   
    height: 100%; 
    
`

export const DivProductImage = styled.div`
    width: 95%;
`

export const DivSimilarProduct = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: var(--Grey);
    box-shadow: 0px 0px 10px 0px #0000000F;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 50px;
    left: 275px;
`
export const ImgSimilar = styled.img``