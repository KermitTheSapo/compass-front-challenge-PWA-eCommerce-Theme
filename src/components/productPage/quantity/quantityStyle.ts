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
