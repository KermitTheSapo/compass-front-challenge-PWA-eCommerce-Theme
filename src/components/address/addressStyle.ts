import styled from "styled-components";

export const ConfirmedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`
export const ConfirmedHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 0 16px;
    min-height: 5vh;
    background-color: var(--Bright);
`
export const ImgBack = styled.img`
    margin-right: 20px;
    @media (min-width: 768px) {
        display: none;
    }
`
export const ConfirmedTitle = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
`

export const ConfirmedAdvise = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 45vh;
`
export const ImgConfirmed = styled.img``
export const ConfirmedAdviseTitle = styled.h2`
    font-weight: 700;
    font-size: 1.75rem;
    color: var(--Dark);
`
export const ConfirmedAdviseText = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--Dark);
    text-align: center;
    width: 70%;
`

export const BtnActionsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 15vh;
`

export const btnView = styled.button`
    width: 90%;
    height: 44px;
    border-radius: 8px;
    border: 2px solid var(--Primary);
    background-color: transparent;
    color: var(--Primary);
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
`
export const btnContinue = styled.button`
    width: 90%;
    height: 44px;
    border-radius: 8px;
    background-color: var(--Primary);
    color: var(--Bright);
    font-weight: 600;
    font-size: 0.875rem;
    cursor: pointer;
    border: none;

`

export const AddressList = styled.div`
    display: flex;
    flex-direction: column;
    width: 98%;
`