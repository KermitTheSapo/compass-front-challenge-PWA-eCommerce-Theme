import styled from "styled-components";

export const SavedCardsContainer = styled.div`
    height: 55vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-between;
    }
`

export const Title = styled.div`
    font-weight: 700;
    font-size: 1.75rem;
    color: var(--Dark);
`
export const UpiList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`

export const UpiCardPassword = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5vh;
    border: 2px solid var(--Primary);
    border-radius: 8px;
    padding: 0 10px;

`

export const Paragraph = styled.p`

`

export const SavedHeader = styled.div`
    display: flex;
    align-items: center;
    height: 8vh;
    gap: 15px;
    width: 100%;
    padding: 0 16px;
    @media (min-width: 768px) {
        display: none;
    }
`

export const SavedHeaderTitle = styled.h1`
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--Primary);
`

export const ImgArrowLeft = styled.img``