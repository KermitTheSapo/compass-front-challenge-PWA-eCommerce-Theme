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
        height: 8vh;
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
`
export const OrderItemLabel = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: ${p => p.color};
`

export const OrderList = styled.div``
export const OrderHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5vh;
    width: 90%;
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
`

export const OrderProducts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    margin-top: 24px;
    height: 60vh;
`
export const OrderTitle = styled.h3`
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
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
    @media (min-width: 768px) {
        display: none;
    }
`