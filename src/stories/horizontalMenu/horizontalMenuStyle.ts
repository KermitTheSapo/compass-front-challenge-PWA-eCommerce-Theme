import styled from "styled-components";

export const HorizontalMenuContainer = styled.div`
    min-width: 138px;
    max-width: 500px;
    height: 50px;
    background-color: ${p => p.color};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
`

export const Label = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: ${p => p.color};
`