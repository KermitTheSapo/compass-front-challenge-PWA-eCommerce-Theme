import styled from "styled-components";

export const OrderDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    gap: 12px;
`

export const OrderTitle = styled.h4`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`
export const OrderSummary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const OrderLabel = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`

export const OrderLabelTotal = styled.p`
    font-weight: 600;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`

