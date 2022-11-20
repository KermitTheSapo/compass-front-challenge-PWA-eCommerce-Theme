import styled from "styled-components";
import bag from "../../../../../../assets/imgs/home/main/arrivals/button/bag.svg"


export const ButtonAdd = styled.button`
    width: 272px;
    height: 44px;
    border-radius: 8px;
    background-color: var(--Primary);
    background-image: url(${bag});
    background-repeat: no-repeat;
    background-position: 16px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Bright);

`