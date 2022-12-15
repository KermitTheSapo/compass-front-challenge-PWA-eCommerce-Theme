import styled from "styled-components";
import plus from "@/assets/imgs/productPage/reviews/Plus.svg"

export const ReviewsContainer = styled.div`

`

export const HeaderNav = styled.header`
    display: flex;
    padding: 0 16px;
    align-items: center;
    height: 8vh;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--Bright);
`
export const ImgNavArrow = styled.img`

`

export const Separator = styled.div`
    height: 8px;
    width: 100%;
    background-color: var(--Grey);
`

export const ButtonAdd = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--Bright);
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 8vh;
`

export const ButtonAddText = styled.button`
    width: 90%;
    height: 80%;
    border-radius: 8px;
    background-color: var(--Primary);
    color: var(--Bright);
    font-weight: 600;
    font-size: 0.875rem;
    border: none;
    outline: none;
    background-image: url(${plus});
    background-repeat: no-repeat;
    background-position:  110px center;
    background-size: 25px;
`

export const ReviewDiv = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 100px;
`