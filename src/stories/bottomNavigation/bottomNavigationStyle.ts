import styled from "styled-components";

export const BottomNavigationContainer = styled.div`
    width: 360px;
    height: 56px;
    background-color: var(--Primary);
    display: flex;
    align-items: center;
`

export const Tab = styled.div`
    height: 50%;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;
`

export const ImgIcon = styled.img``

export const labelParagraph = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--Bright);
`
