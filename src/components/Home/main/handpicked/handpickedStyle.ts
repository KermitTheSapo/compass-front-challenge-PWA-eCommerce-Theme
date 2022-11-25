import styled from "styled-components";

export const HandpickedContainer = styled.section`
    padding: 18px 16px 16px 16px;
    background-color: var(--Primary);
    margin-top: 36px;
`

export const Title = styled.h3`
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--Bright);
    margin-bottom: 23px;
    @media (min-width: 768px) {
        font-size: 2.125rem;
    }
`
export const Collections = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    margin-top: 13px;
    font-size: 15px;

    @media (max-width: 320px) {
        gap: 10px;
    }
`

export const ImgCollections = styled.img`
    width: 186px;
    height: 180px;
    @media (min-width: 1024px) {
        width: 280px;
        height: 280px;
    }
    @media (max-width: 1024px) {
        width: 220px;
        height: 220px;
    }
    @media (max-width: 768px) {
        width: 280px;
        height: 280px;
    }
    @media (max-width: 425px) {
        width: 186px;
        height: 180px;
    }
    @media (max-width: 375px) {
        width: 160px;
        height: 160px;
    }
    @media (max-width: 320px) {
        width: 120px;
        height: 120px;
    }
`
