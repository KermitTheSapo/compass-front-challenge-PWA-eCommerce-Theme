import styled from "styled-components";

export const OptionNavigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
`
export const NavigationLabel = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: ${p => p.color};
`
export const ImgArrow = styled.img``

export const Selector = styled.div`
    height: 50px;
    width: 4px;
    border-radius: 8px;
    background-color: var(--Selector);
`

export const SelectorLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`