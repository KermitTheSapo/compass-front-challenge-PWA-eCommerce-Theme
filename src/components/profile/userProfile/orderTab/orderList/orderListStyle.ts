import styled from "styled-components";


export const OrderTabs = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--Grey);
    border-radius: 12px;
    height: 10vh;
    gap: 24px;
    padding: 0px 12px;
    @media (max-width: 768px) {
        height: 5vh;
    }
`
export const OrderItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 121px;
    background-color: ${p => p.color};
    border-radius: 8px;
    @media (max-width: 768px) {
        height: 80%;
    }
`
export const OrderItemLabel = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: ${p => p.color};
`

export const OrderList = styled.div``
export const OrderDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`
export const OrderHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5vh;
    width: 90%;
    @media (max-width: 768px) {
        display: none;
    }
`
export const OrderHeaderLabel = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
`

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--Separator);
    @media (max-width: 768px) {
        display: none;
    }
`

export const OrderProducts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    margin-top: 24px;
    height: 60vh;
    @media (max-width: 768px) {
        padding: 0 16px;
    }
`
export const OrderTitle = styled.h3`
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--Primary);
    @media (min-width: 768px) {
        display: none;
    }
`
export const OrderNav = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 16px;
    height: 8vh;
    justify-content: space-between;
    @media (min-width: 768px) {
        display: none;
        
    }
`

export const OrderQuantity = styled.p`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
    @media (min-width: 768px) {
        display: none;
    }
`