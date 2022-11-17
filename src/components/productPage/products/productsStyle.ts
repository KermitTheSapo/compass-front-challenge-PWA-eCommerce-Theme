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
    width: 95%;    
`
