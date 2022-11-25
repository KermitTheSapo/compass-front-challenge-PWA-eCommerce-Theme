import styled from "styled-components";

import placeholder from "../assets/formControl/placeholder.svg"

export const Input = styled.input`
    width: 328px;
    height: 56px;
    background-color: var(--Grey);
    border-radius: 4px;
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 1rem;
    padding: 0 0px 0px 52px;
    background-size: 24px; 
    background: url(${placeholder}) no-repeat 16px 50%, url(${placeholder}) right 50% no-repeat, url(${placeholder}) 320px 50% no-repeat;
`