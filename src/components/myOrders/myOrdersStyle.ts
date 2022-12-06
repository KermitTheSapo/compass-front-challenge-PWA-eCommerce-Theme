import styled from "styled-components";

export const MyOrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
`

export const MyOrderHeader = styled.div`
    display: flex;
    align-items: center;
    height: 10vh;
    justify-content: space-between;
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 35%;
`

export const ImgArrow = styled.img`

`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
`

export const ImgBag = styled.img`

`

export const Tabs = styled.div`
    display: flex;
    align-items: center;
    height: 36px;
    border-radius: 12px;
    justify-content: space-around;
    background-color: var(--Grey);
`
export const Tab = styled.p`
    background-color: ${p => p.color};
    padding: 6px 18px 6px 18px;
    border-radius: 8px;
    cursor: pointer;
`

export const OrderList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const Paragraph = styled.p`
    height: 5vh;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--TypeLowEmphasis);
`

export const ParagraphTab = styled.p`
    font-weight: 500;
    font-size: 0.75rem;
    color: ${p => p.color};
`