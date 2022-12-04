import styled from "styled-components";


export const SummaryAndDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`
export const OrderSummaryDiv = styled.div`
    display: flex;
    flex-direction: column;
`
export const OrderSummaryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const OrderSummaryTitle = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Dark);
`
export const OrderSummaryContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 35vh;
    overflow: auto;
    gap: 15px;
    &::-webkit-scrollbar { 
      display: none;
    }
`


export const OrderDetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const OrderDetailsHeader = styled.div`
    display: flex;
    align-items: center;
    height: 5vh;
`
export const OrderDetailsTitle = styled.h2`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Dark);
`
export const OrderDetailsContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 15vh;
    justify-content: space-evenly;
`
export const OrderDetailsList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const OrderLabel = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`
export const OrderPrice = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`
export const OrderResult = styled.p`
    font-weight: 600;
    font-size: 1rem;
    color: var(--TypeHighEmphasis);
`

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--Separator);
`

export const EmptyCart = styled.div`
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const EmptyTitle = styled.h2`
    font-weight: 700;
    font-size: 1.75rem;
    color: var(--Dark);
`
export const EmptyParagraph = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--Dark);
    width: 80%;
    text-align: center;
`