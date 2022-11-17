import styled from "styled-components";


export const Quantity = styled.div`
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    @media (max-width: 768px) {
        display: none;
    }
`

export const QuantityTitle = styled.h3`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Dark);
`

export const QuantityCounter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: solid 1px var(--Primary);
    border-radius: 4px;
    height: 30px;
    width: 40%;
`
export const QuantityNumber = styled.h4`
    font-weight: 400;
    font-size: 0.875rem;
    color: var(--TypeHighEmphasis);
`
export const Img = styled.img`

`