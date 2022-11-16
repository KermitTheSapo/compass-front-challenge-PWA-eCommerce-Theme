import styled from "styled-components";

export const SheetContainer = styled.div`
    position: fixed;
    background-color: var(--DarkShadow);
    height: 100%;
    width: 100%;
    z-index: 3;
    padding: 0;
    right: 0px;
    top: 0px;
`

export const SheetDiv = styled.div`
    display: flex;
    position: absolute;
    z-index: 1;
`