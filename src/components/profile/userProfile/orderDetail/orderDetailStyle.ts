import styled from "styled-components";

export const OrderDetailContainer = styled.div`

`

export const OrderTabs = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--Grey);
    border-radius: 12px;
    height: 10vh;
    gap: 24px;
    padding: 0px 12px;
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


export const ProductInformation = styled.div`
    display: flex;

`

export const TableHeaders = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5vh;
`

export const ValueInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
`

export const TableLabel = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--TypeLowEmphasis);
`



export const Separator = styled.div`
    height: 1px;
    width: 100%;
    background-color: var(--Separator);
`

export const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const OrderInformation = styled.div`
    display: flex;
    flex-direction: column;

`

export const OrderInfoTitle = styled.h3`
    font-weight: 600;
    font-size: 20px;
    color: var(--Dark);
`

export const OrderInfoHeader = styled.div`
    display: flex;
    flex-direction: column;
    height: 8vh;
    justify-content: space-evenly;
`
export const OrderInfoContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`

export const ButtonsNavigation = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 100%;
    gap: 24px;
    height: 30vh;
`
export const ButtonReorder = styled.button`
    height: 44px;
    border-radius: 8px;
    background-color: var(--Primary);
    border: none;
    color: var(--Bright);
    font-weight: 600;
    font-size: 0.875rem;
    width: 136px;
`

export const ButtonRating = styled.button`
    height: 44px;
    width: 136px;
    border-radius: 8px;
    background-color: transparent;
    border: 2px solid var(--Primary);
    color: var(--Primary);
    font-weight: 600;
    font-size: 1rem;
`