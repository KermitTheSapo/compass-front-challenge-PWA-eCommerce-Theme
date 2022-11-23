import styled from "styled-components";


export const TabsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 348px;
    background-color: var(--Grey);
    height: 36px;
    border-radius: 12px;
`

export const Tab = styled.div`
    height: 90%;
    background-color: ${p => p.color};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    cursor: pointer;
`
export const Paragraph = styled.p`
    color: ${p => p.color};
`