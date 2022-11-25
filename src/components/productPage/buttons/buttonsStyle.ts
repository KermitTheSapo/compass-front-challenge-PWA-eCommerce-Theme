import styled from "styled-components";

import iconBag from "../../../assets/imgs/productPage/icon-bag.svg"
import iconWish from "../../../assets/imgs/productPage/icon-wish.svg"

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    height: 15vh;
    @media (max-width: 768px) {
        display: none;
    }
`

export const ButtonAddBag = styled.button`
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: var(--Primary);
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Bright);
    height: 44px;
    width: 55%;
    background-image: url(${iconBag});
    background-repeat: no-repeat;
    background-position: 120px center;
    @media (min-width: 1024px) {
        background-position: 50px center;
    }
`

export const ButtonAddWish = styled.button`
    border-radius: 8px;
    background-color: transparent;
    border: 2px solid var(--Primary);
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Primary);
    height: 44px;
    width: 35%;
    background-image: url(${iconWish});
    background-repeat: no-repeat;
    background-position: 40px center;
    @media (min-width: 1024px) {
        background-position: 5px center;
    }
`